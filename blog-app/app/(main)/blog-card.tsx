import Link from "next/link";
import type { ReactNode } from "react";

export type Props = {
  title: string;
  description: string;
  children: () => ReactNode;
};

export default function ({ title, description, children }: Props) {
  return (
    <div className="shadow p-4">
      <Link href={"/"}>
        <h3 className="font-black text-xl font-mono">{title}</h3>
        <p className="text-xs text-gray-600">{description}</p>
        <div className="mt-3 *:text-sm">{children()}</div>
      </Link>
    </div>
  );
}
