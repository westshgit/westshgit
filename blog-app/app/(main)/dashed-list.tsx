import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function ({ children, className, ...props }: { children: ReactNode } & React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li {...props} className={cn("flex items-center gap-2 [&_p]:text-sm", className)}>
      <span className="h-0.5 w-2 bg-gray-500 rounded-3xl"></span>
      {children}
    </li>
  );
}
