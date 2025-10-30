import BlogCard from "@/app/(main)/blog-card";

export default function () {
  return (
    <div className="space-y-9 [&_h2]:text-gray-900 [&_h2]:font-bold [&_h2]:text-xl *:space-y-6">
      <div>
        <h2>About Me:</h2>
        <p className="text-sm text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat debitis provident nihil ipsa tempora suscipit placeat
          id vitae. Natus vitae veritatis, excepturi maxime nisi temporibus voluptatem molestiae consectetur sequi. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Officiis repellat debitis provident nihil ipsa tempora suscipit placeat id vitae. Natus vitae
          veritatis, excepturi maxime nisi temporibus voluptatem molestiae consectetur sequi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis repellat debitis provident nihil ipsa tempora suscipit placeat id vitae. Natus vitae veritatis,
          excepturi maxime nisi temporibus voluptatem molestiae consectetur sequi.
        </p>
      </div>

      <div>
        <h2>Technical Contributions:</h2>

        <div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque consequuntur eaque voluptas totam! Deserunt facere
            labore placeat quo ab recusandae pariatur architecto aliquam cumque ratione, expedita, eaque consectetur dolore!
          </p>
        </div>
      </div>

      <div className="pb-10">
        <h2>Blog:</h2>

        <div className="space-y-9">
          <BlogCard title="Codora Framework" description="Open source software for Rust application">
            {() => (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat debitis provident nihil ipsa tempora suscipit
                placeat id vitae. Natus vitae veritatis, excepturi maxime nisi
              </p>
            )}
          </BlogCard>
          {/* <BlogCard title="Another Blog" description="Some blog we'nt gonna write">
            {() => (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat debitis provident nihil ipsa tempora suscipit
                placeat id vitae. Natus vitae veritatis, excepturi maxime nisi
              </p>
            )}
          </BlogCard> */}
        </div>
      </div>
    </div>
  );
}
