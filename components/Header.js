import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  MenuIcon,
  BellIcon,
  MapIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useRouter } from "next/router";
import { Router } from "react-router-dom";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between mx-5">
        {/* Left - Logo */}
        <div className="relative w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            fill
            style={{ objectFit: "contain" }}
            onClick={() => router.push("/")}
          />
        </div>

        {/* Middle - Search */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center justify-end space-x-3">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className="h-8 md:hidden cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
          {session ? (
            <>
              <MapIcon className="navBtn" />
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <div className="relative navBtn">
                <BellIcon className="navBtn" onClick={signOut} />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <img
                // onClick={signOut}
                onClick={() => router.push("/profile")}
                src={session?.user?.image}
                alt="profile picture"
                className="h-10 w-10 rounded-full cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
