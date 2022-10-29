"use client";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";

const nav = [
  {
    title: "Home",
  },
  {
    title: "About",
  },
  {
    title: "Blog",
  },
];

const NavBar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header
        className={clsx(
          "w-full  rounded-lg",
          "max-w-screen-lg mx-auto bg-white",
          "shadow-md z-10 relative top-0 left-0 transition-all ease-in-out duration-500",
          isActive ? "h-[280px]" : "h-[80px]"
        )}
      >
        <div
          className={clsx(
            "w-full h-[80px] flex items-center justify-between px-7"
          )}
        >
          <div className="tracking-wide">
            <Link href="/" className="text-zinc-700 text-xl">
              Moran<span className="text-purple-500 text-2xl">st</span>
            </Link>
          </div>
          <div>
            <ul className="gap-x-4 hidden md:flex">
              {nav.map((items, i) => (
                <Link
                  href={
                    items.title === "Home" ? "/" : items.title.toLowerCase()
                  }
                  className="text-zinc-400 hover:text-zinc-600"
                  key={i}
                >
                  <li>{items.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <button className="bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-300  md:block hidden py-2 px-4">
              Pro Version
            </button>
          </div>
          <div
            className="md:hidden cursor-pointer "
            onClick={() => setIsActive(!isActive)}
          >
            <div
              className={clsx(
                "w-6 h-1 bg-gray-700/80 my-1 rounded-md transition-all duration-300",
                isActive && "-rotate-45 translate-y-1"
              )}
            ></div>
            <div
              className={clsx(
                "w-6 h-1 bg-gray-700/80 my-1 rounded-md transition-all duration-300",
                isActive && "rotate-45 -translate-y-1"
              )}
            ></div>
          </div>
        </div>
        <div>
          <ul
            className={clsx(
              "px-7 h-full flex flex-col gap-y-5 mt-5 transition-all ease-in-out duration-300",
              isActive ? "opacity-100" : "opacity-0 invisible"
            )}
          >
            {nav.map((items, i) => (
              <Link
                href={items.title === "Home" ? "/" : items.title.toLowerCase()}
                className="text-zinc-400 transition-all duration-300 text-md hover:text-zinc-600"
                key={i}
                onClick={() => setIsActive(false)}
              >
                <li>{items.title}</li>
              </Link>
            ))}
            <button className="bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-300 py-2 px-4">
              Pro Version
            </button>
          </ul>
        </div>
      </header>
      <div className="px-7 md:hidden text-md border border-gray-200 text-gray-600 py-4">
        <div> React &gt; Navbar</div>
      </div>
    </>
  );
};

export default NavBar;