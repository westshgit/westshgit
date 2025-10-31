import Link from "next/link";
import type { ReactNode } from "react";

export default function ({
  title,
  blogLink,
  children,
  description,
}: {
  title: string;
  blogLink: string;
  description: string;
  children: () => ReactNode;
}) {
  return (
    <div className="shadow p-4 outline-8 hover:outline-gray-100 outline-transparent transition-all duration-100 ease-in-out">
      <Link href={blogLink}>
        <h3 className="font-black text-xl font-mono">{title}</h3>
        <p className="text-xs text-gray-600">{description}</p>
        <div className="mt-3 *:text-sm">{children()}</div>
      </Link>
    </div>
  );
}
