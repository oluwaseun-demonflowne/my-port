import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import SocialLinks from "./SocialLinks";

const Details = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-6">Ibu Emmanuel</h1>
      <div className="space-y-2">
        <div className="flex items-center">
          <IoLocationOutline className="text-base" />
          <p className="ml-2">Lagos, Nigeria</p>
        </div>
        <div className="flex items-center">
          <BsBriefcase className="text-base" />
          <p className="ml-2">Freelance frontend developer | mobile</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-6">
        <p>
          I am a Frontend Engineer who enjoy enjoys converting cool figma UI to
          a great experience on the web and mobile. I love building things and
          solving problems. I am obessed with learning new concepts and
          languages to help my growth and i live in{" "}
          <span className="underline px-2">VSCODE</span>. When I&apos;m not
          writing code, you’ll find me playing games .
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Details;
