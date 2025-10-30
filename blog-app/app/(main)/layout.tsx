import type { ReactNode } from "react";
import Header from "@/app/(main)/header";

export default function ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="space-y-6">
      <Header />
      {children}
    </div>
  );
}
