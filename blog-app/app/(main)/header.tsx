import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/app/(main)/github-icon";
import TweetIcon from "@/app/(main)/tweet-icon";
import { WEST_EMAIL, WEST_GITHUB_LINK, WEST_X_LINK } from "@/lib/constant";
import westSheriff from "@/public/westsheriff.jpg";

export default function () {
  return (
    <div className="space-y-3">
      <Link href={WEST_X_LINK} target="_blank" className="block">
        <Image
          src={westSheriff}
          alt="West Sheriff"
          className="size-44 object-cover object-bottom rounded-md pointer-events-none select-none"
          unoptimized
          priority
        />
      </Link>

      <div className="space-y-1">
        <h1 className="text-lg md:text-2xl whitespace-nowrap font-medium">
          <Link href={"/"}>West Sheriff</Link>
        </h1>

        <div className="flex items-center *:hover:bg-gray-100 *:inline-flex *:items-center *:gap-1 *:p-1 *:px-2 *:text-xs *:hover:rounded-md transition-colors duration-300 ease-in-out">
          <Link target="_blank" href={WEST_GITHUB_LINK}>
            <GithubIcon />
            Github
          </Link>
          <Link target="_blank" href={WEST_X_LINK}>
            <TweetIcon /> (Twitter) Follow Me
          </Link>{" "}
          <Link target="_blank" href={`mailto:${WEST_EMAIL}?subject=Hey%20West%20Sheriff`}>
            <Mail className="text-red-400" width={16} height={16} />
            Send Email
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
