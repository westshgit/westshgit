import Link from "next/link";

export default function () {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 shadow shadow-gray-400 dark:text-gray-400  font-mono">
      <div className="grow text-left">
        West Sheriff (
        <Link target="_blank" href="https://x.com/westxsh" className="underline">
          @westxsh
        </Link>
        )
      </div>
      <div>
        <Link target="_blank" href="https://github.com/westshgit/westshgit">
          Source Code
        </Link>
      </div>
    </footer>
  );
}
