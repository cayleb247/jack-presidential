"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function Header() {

  const pathname = usePathname();

  return (
    <div className="bg-white flex box-border justify-between relative overflow-hidden" id="header">
      <div className="absolute z-0 right-0 top-0 w-full h-full">
        <Image
          src="/American-Flag-Wave-Wallpaper-Mural.jpg"
          alt="flag"
          fill
          className="opacity-10 object-cover z-0"
        ></Image>
      </div>
      <div className="flex w-full z-10">
        <div className="w-1/4 h-full py-3 px-5 bg-linear-to-r from-white to-transparent">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="z-10"
          ></Image>
        </div>
        <div className="font-bold gap-3 flex text-blue-900 justify-end w-3/4 items-center z-10 py-3 px-5">
          <div className="gap-4 flex text-3xl items-center">
            <Link
              href="/"
              className={clsx({
                "text-[#D40104]": pathname === "/",
              })}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={clsx({
                "text-[#D40104]": pathname === "/about",
              })}
            >
              About
            </Link>
            <Link
              href="/store"
              className={clsx({
                "text-[#D40104]": pathname === "/store",
              })}
            >
              Store
            </Link>
            <Link
              href="/donate"
              className={clsx({
                "text-[#D40104]": pathname === "/donate",
              })}
            >
              <div className="bg-blue-800 text-white px-4 py-2 box-border rounded-2xl">
                <h1>Donate</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
