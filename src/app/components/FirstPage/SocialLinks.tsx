import Link from "next/link";
import React from "react";
import { IoIosLink } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";

const SocialLinks = () => {
  return (
    <div className="space-y-2">
      <p className="font-light">Want to contact me ?</p>
      <div className="flex gap-7">
        <button className="flex gap-2 items-center">
          <LuGithub />
          <Link
            className="underline gap-2 flex items-center"
            href="https://github.com/oluwaseun-demonflowne"
          >
            github
            <IoIosLink />
          </Link>
        </button>
        <button className="flex gap-2 items-center">
          <MdOutlineAlternateEmail />
          <Link
            className="underline gap-2 flex items-center"
            href="mailto:ibuemmanuel60@gmail.com"
          >
            email
            <IoIosLink />
          </Link>
        </button>
        <button className="flex gap-2 items-center">
          <RiTwitterXLine />
          <Link
            className="underline gap-2 flex items-center"
            href="https://x.com/demonflown"
          >
            x(formerly twitter)
            <IoIosLink />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
