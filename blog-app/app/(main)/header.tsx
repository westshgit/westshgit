import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import personalImage from "../../public/westsheriff.jpg";
import Tweeticon from "./tweeticon";

export default function () {
  return (
    <div className="space-y-3">
      <Link href={"https://x.com/westxsh"} target="_blank" className="block">
        <Image src={personalImage} alt="West Sheriff" className="size-44 object-cover object-bottom rounded-md" unoptimized priority />
      </Link>

      <div className="space-y-1">
        <h1 className="text-lg md:text-2xl whitespace-nowrap font-medium">
          <Link href={"/"}>West Sheriff</Link>
        </h1>

        <div className="flex items-center *:hover:bg-gray-100 *:inline-flex *:items-center *:gap-1 *:p-1 *:px-2 *:hover:rounded-md transition-colors duration-300 ease-in-out">
          <Link target="_blank" href="https://x.com/westxsh" className="flex items-center text-xs gap-0.5">
            <Tweeticon /> (Twitter) Follow Me
          </Link>{" "}
          <Link target="_blank" href="https://x.com/westxsh" className="flex items-center text-xs gap-0.5">
            <Mail className="text-red-400" width={16} height={16} />
            Send Email
          </Link>
        </div>
      </div>
    </div>
  );
}
