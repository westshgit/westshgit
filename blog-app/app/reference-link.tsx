import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function ({
  children,
  className,
  ...props
}: { children: ReactNode } & LinkProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps<unknown>>) {
  return (
    <Link {...props} className={cn("underline text-red-400", className)}>
      {children}
    </Link>
  );
}
