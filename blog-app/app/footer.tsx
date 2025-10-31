import Link from "next/link";
import { SOURCE_CODE_GITHUB_LINK, WEST_X_LINK } from "@/lib/constant";

export default function () {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 shadow shadow-gray-400 dark:shadow-gray-800 font-mono">
      <div className="grow text-left">
        West Sheriff (
        <Link target="_blank" href={WEST_X_LINK} className="underline">
          @westxsh
        </Link>
        )
      </div>
      <div>
        <Link target="_blank" href={SOURCE_CODE_GITHUB_LINK}>
          Source Code
        </Link>
      </div>
    </footer>
  );
}
