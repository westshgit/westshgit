import BlogCard from "@/app/(main)/blog-card";
import DashedList from "@/app/(main)/dashed-list";
import ReferenceLink from "@/app/reference-link";
import { CODORA_FRAMEWORK_LINK } from "@/lib/constant";

export default function () {
  return (
    <div className="space-y-9 [&_h2]:text-gray-900 dark:[&_h2]:text-gray-50 [&_h2]:font-bold [&_h2]:text-xl *:space-y-6">
      <div>
        <h2>About Me</h2>
        <p className="text-sm">
          I’m a software engineer, I write code, break things, fix them again. I’m from Nigeria. My current work includes{" "}
          <ReferenceLink href="#">Codora</ReferenceLink> and <ReferenceLink href={CODORA_FRAMEWORK_LINK}>Codora Framework</ReferenceLink> —
          a platform and framework designed to help developers build Rust and other applications faster. It also powers{" "}
          <ReferenceLink href="#">theProject</ReferenceLink>, another project I’m currently building and leading.
        </p>
      </div>

      <div>
        <h2>Technical Contributions</h2>
        <ul>
          <DashedList>
            <p>
              I’m developing the <ReferenceLink href={CODORA_FRAMEWORK_LINK}>Codora Framework</ReferenceLink>, an open-source framework for
              Rust applications.
            </p>
          </DashedList>
        </ul>
      </div>

      <div className="pb-10">
        <h2>Blog</h2>
        <div className="space-y-9">
          <BlogCard
            blogLink="/"
            title="Codora"
            description="Articles exploring the vision, motivation, and technical roadmap behind Codora."
          >
            {() => (
              <p>
                Discover the motivation and long-term roadmap for Codora — the next big step in building faster, more efficient Rust
                applications.
              </p>
            )}
          </BlogCard>
        </div>
      </div>
    </div>
  );
}
