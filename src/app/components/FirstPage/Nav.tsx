import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="text-[15px] flex gap-4">
      <button className="underline">
        <Link href="">Home</Link>
      </button>
      <button className="underline">
        <Link download={"Ibu Emmanuel Resume.pdf"} href="/Ibu Emmanuel Resume.pdf">See resume</Link>
      </button>
    </div>
  );
};

export default Nav;
