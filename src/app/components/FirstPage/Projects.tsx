import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosLink } from "react-icons/io";
import { LuGithub } from "react-icons/lu";

const Projects = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl mt-6 font-semibold">
        Projects i have enjoyed working on
      </h1>
      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-2">
          <Link target="_blank" href="https://payrole-hr.vercel.app/">
            <h1 className="text-lg font-medium underline">Payrole</h1>
          </Link>
          <p>creator and maintainer</p>
          <div className="mt-3 flex">
            <div className="w-[50%]   justify-center hidden md:flex">
              <Image
                alt="payroll preview"
                src={"/payroll.png"}
                width={100}
                height={100}
                unoptimized
                className="w-72 hover:rotate-0 transition-all -rotate-12 h-40"
              />
            </div>
            <div className="md:w-[50%] space-y-2 text-[17px]">
              <p className="">
                Payrole is a powerful and easy-to-use platform designed to help
                HR departments streamline payroll and manage workforce
                operations more effectively. With a focus on accuracy,
                compliance, and convenience.
              </p>
              <button className="flex gap-2 text-[13px] items-center">
                <LuGithub className="text-base" />
                <Link
                  className="underline gap-2 flex items-center"
                  href="https://github.com/oluwaseun-demonflowne/payrole"
                >
                  https://github.com/oluwaseun-demonflowne/payrole
                  <IoIosLink />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-medium underline">Confrenza</h1>
          <p>creator and maintainer</p>
          <div className="mt-3 flex">
            <div className="md:w-[50%] space-y-2 text-[17px]">
              <p>
                Confrenzer is a video Conference app for people who want to hold
                a virtual conference online but don&apos;t want the traditional
                google meet or zoom way, this is more conference focused with
                much more capabilities and prioritize the host POV.
              </p>
              <button className="flex gap-2 text-[13px] items-center">
                <LuGithub className="text-base" />
                <Link
                  className="underline gap-2 flex items-center"
                  href="https://github.com/oluwaseun-demonflowne/video-conference-backend"
                >
                  https://github.com/oluwaseun-demonflowne/video-conference-backend
                  <IoIosLink />
                </Link>
              </button>
            </div>
            <div className="w-[50%]   justify-center hidden md:flex">
              <Image
                alt="confrenza preview"
                src={"/confrenza.png"}
                width={100}
                height={100}
                unoptimized
                className="w-72 hover:rotate-0 transition-all -rotate-12 h-40"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link target="_blank" href="https://deelhrproject.vercel.app/">
            <h1 className="text-lg font-medium underline">deel</h1>
          </Link>
          <p>creator and maintainer</p>
          <div className="mt-3 flex">
            <div className="w-[50%]   justify-center hidden md:flex">
              <Image
                alt="payroll preview"
                src={"/payroll.png"}
                width={100}
                height={100}
                unoptimized
                className="w-72 hover:rotate-0 transition-all -rotate-12 h-40"
              />
            </div>
            <div className="md:w-[50%] space-y-2 text-[17px]">
              <p className="">
                deel AI is an intelligent HR application designed to transform
                the hiring process by automating resume screening for job
                postings. Built with advanced artificial intelligence, the app
                analyzes resumes to quickly and accurately identify the best
                candidates for a role, saving HR teams valuable time and effort.
              </p>
              <button className="flex gap-2 text-[13px] items-center">
                <LuGithub className="text-base" />
                <Link
                  className="underline gap-2 flex items-center"
                  href="https://github.com/oluwaseun-demonflowne/deel"
                >
                  https://github.com/oluwaseun-demonflowne/deel
                  <IoIosLink />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link target="_blank" href="https://chatapp.stealthcode.site">
            <h1 className="text-lg font-medium underline">ChatterBox</h1>
          </Link>
          <p>creator and maintainer</p>
          <div className="mt-3 flex">
            <div className="w-[50%]   justify-center hidden md:flex">
              <Image
                alt="chatter preview"
                src={"/chatter.png"}
                width={100}
                height={100}
                unoptimized
                className="w-72 hover:rotate-0 transition-all -rotate-12 h-40"
              />
            </div>
            <div className="md:w-[50%] space-y-2 text-[17px]">
              <p className="">
                ChatterBox is a chatting appllication built with web sockets ,
                enables real time text chatting and sharing of images, image
                quality is full quality , never gets reduced , also a notifier
                to the person you are texting if he/she/them isn&apos;t online
              </p>
              <button className="flex gap-2 text-[13px] items-center">
                <LuGithub className="text-base" />
                <Link
                  className="underline gap-2 flex items-center"
                  href="https://github.com/oluwaseun-demonflowne/workers-chatapp-frontend"
                >
                  https://github.com/oluwaseun-demonflowne/workers-chatapp-frontend
                  <IoIosLink />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link target="_blank" href="https://fileio.stealthcode.site/">
            <h1 className="text-lg font-medium underline">Fileio</h1>
          </Link>
          <p>creator and maintainer</p>
          <div className="mt-3 flex">
            <div className="md:w-[50%] space-y-2 text-[17px]">
              <p className="">
                Fileio is a real time file sharing system for companies and
                enterpises to use to share live files between each other instead
                of the traditional way of using physical hardwares like USB
                stick, e.t.c
              </p>
              <button className="flex gap-2 text-[13px] items-center">
                <LuGithub className="text-base" />
                <Link
                  className="underline gap-2 flex items-center"
                  href="https://github.com/oluwaseun-demonflowne/file-storage-check"
                >
                  https://github.com/oluwaseun-demonflowne/file-storage-check
                  <IoIosLink />
                </Link>
              </button>
            </div>
            <div className="w-[50%]   justify-center hidden md:flex">
              <Image
                alt="deUpload preview"
                src={"/deupload.png"}
                width={100}
                height={100}
                unoptimized
                className="w-72 hover:rotate-0 transition-all -rotate-12 h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
