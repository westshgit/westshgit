//! Checking out utoipa and axum
//!
//!
use axum::{Json, Router, routing::get};
use serde::Serialize;
use tokio::{net::TcpListener, signal};
use utoipa::{OpenApi, ToSchema};

#[macro_use]
extern crate tracing;

mod error {
    use axum::{Json, response::IntoResponse};
    use hyper::StatusCode;
    use serde_json::json;
    use std::{borrow::Cow, fmt::Display};
    #[derive(Debug, thiserror::Error)]

    pub enum Error {
        Custom(Cow<'static, str>),
        IO(#[from] std::io::Error),
        SERDE(#[from] serde_json::Error),
    }

    impl Display for Error {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self)
        }
    }
    impl From<Box<dyn std::error::Error>> for Error {
        fn from(value: Box<dyn std::error::Error>) -> Self {
            Error::Custom(format!("{:?}", value).into())
        }
    }

    impl IntoResponse for Error {
        fn into_response(self) -> axum::response::Response {
            match self {
                Error::IO(_) => StatusCode::INTERNAL_SERVER_ERROR.into_response(),
                Error::Custom(cow) => Json(json!({ "message": cow})).into_response(),
                Error::SERDE(_) => StatusCode::INTERNAL_SERVER_ERROR.into_response(),
            }
        }
    }
}
use error::*;

#[derive(ToSchema, Serialize, Clone, Copy)]
struct Handler {
    content: &'static str,
}

impl Handler {
    const fn new(content: &'static str) -> Self {
        Self { content }
    }
}

impl std::fmt::Debug for Handler {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Handler")
            .field("content", &self.content)
            .finish()
    }
}

#[derive(OpenApi)]
#[openapi(
    paths(handler),
    info(description = r#"
    # APIDOC

    This is a documentation for the apidoc server
    "#)
)]
struct APIDOC;

#[allow(dead_code)]
#[instrument]
#[utoipa::path(
    get,
    path = "/", 
    responses((status = 200, description = "Handler from the server", body = Handler))
)]
// We can set multiple params and responses as well
async fn handler() -> Json<Handler> {
    // This is just to test static btw
    static HANDLER: Handler = Handler::new("We got that too!");

    Json(HANDLER)
}

#[instrument]
#[utoipa::path(get, path = "get-openapi", responses((status = 200, description = "Get OpenApi", body = String)))]
async fn openapi_handler() -> Result<String, Error> {
    APIDOC::openapi().to_json().map_err(Error::from)
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    tracing_subscriber::fmt().init();

    let app = Router::new()
        .route("/", get(handler))
        .route("/get-openapi", get(openapi_handler));

    let listener = TcpListener::bind("127.0.0.1:3000").await?;
    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .await?;

    Ok(())
}
/// shutdown signal handler
/// The server would be terminated when this function is resolved!
async fn shutdown_signal() {
    //* Install ctrl c handler
    let ctrl_c = async {
        signal::ctrl_c()
            .await
            .expect("failed to install Ctrl+C handler");
    };

    #[cfg(unix)]
    let terminate = async {
        signal::unix::signal(signal::unix::SignalKind::terminate())
            .expect("failed to install signal handler")
            .recv()
            .await;
    };

    #[cfg(not(unix))]
    let terminate = std::future::pending::<()>();

    tokio::select! {
        _ = ctrl_c => {
            eprintln!("Ctrl C handler recieved!");
        },
        _ = terminate => {},
    }
}
