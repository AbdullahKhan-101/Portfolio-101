import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, MenuIcon, XIcon } from "@heroicons/react/outline";
import { IconButton } from "@mui/material";
import { Facebook, LinkedIn, WhatsApp, GitHub } from "@mui/icons-material";

import { Router, useRouter } from "next/router";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const router = useRouter();

  return (
    <div className="sticky top-0 z-20 shadow-xl bg-slate-900">
      <main className="flex items-center justify-between max-w-6xl px-2 mx-auto text-white md:py-2 ">
        <div
          onClick={() => router.push("/")}
          className="relative h-16 cursor-pointer w-36 md:w-44"
        >
          <Image
            src="https://www.pikpng.com/pngl/b/501-5014867_portfolio-logo-png-portfolio-png-clipart.png"
            alt="infoImg"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          className={`absolute top-0 right-0 flex-col rounded-tr-md z-50 rounded-bl-md justify-center p-6 text-gray-200 transition-all duration-200 ease-out mt-14 md:items-center md:flex-row md:space-x-6 md:static bg-slate-900 md:bg-transparent md:mt-0 md:p-0 md:inline-flex ${
            !burgerStatus ? "hidden" : "inline-flex"
          } ${!burgerStatus ? "-translate-x-10" : "translate-x-0"}
          `}
        >
          <p
            onClick={() => router.push("/about")}
            className="p-3 px-6 mt-1 text-xl font-semibold rounded-md cursor-pointer lg:px-8 lg:p-4 hover:bg-slate-700 md:mt-0"
          >
            About
          </p>
          <p
            onClick={() => router.push("/portfolio")}
            className="p-3 px-6 text-xl font-semibold rounded-md cursor-pointer lg:p-4 lg:px-8 hover:bg-slate-700 "
          >
            Portfolio
          </p>
          <a href="#contact">
            <p className="p-3 px-6 mb-3 text-xl font-semibold rounded-md cursor-pointer lg:p-4 lg:px-8 hover:bg-slate-700 md:mb-0">
              Contact
            </p>
          </a>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-5">
          <a rel="noreferrer" href="https://wa.me/923323876075" target="_blank">
            <WhatsApp className="w-10 text-[#25D366] cursor-pointer h-7 md:hover:-translate-y-1 transition duration-200 ease-out" />
          </a>
          <a
            className="hidden sm:inline-flex"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100028841142122"
            target="_blank"
          >
            <Facebook className="w-10 text-[#008ad3] cursor-pointer h-6 md:h-7 md:hover:-translate-y-1 transition duration-200 ease-out hidden sm:inline-flex" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/abdullah-khan-278aa0233/"
            target="_blank"
          >
            <LinkedIn className="w-10 text-[#00a0dc] cursor-pointer md:h-7 h-6 md:hover:-translate-y-1 transition duration-200 ease-out" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/abdullahkhan-101"
          >
            <GitHub className="w-10 text-[#fff]  cursor-pointer md:h-7 h-6 md:hover:-translate-y-1 transition duration-200 ease-out" />
          </a>

          <IconButton>
            <MenuIcon
              className={`-mr-1 -ml-2 sm:-ml-1 w-6 h-6 cursor-pointer md:hidden text-white transition duration-200 ease-out ${
                !burgerStatus ? "inline-flex" : "hidden"
              }`}
              onClick={() => setBurgerStatus(true)}
            />
          </IconButton>
          {burgerStatus && (
            <IconButton>
              <XIcon
                onClick={() => setBurgerStatus(false)}
                className="w-6 h-6 -mr-1 text-white transition duration-200 ease-out cursor-pointer -ml-7 md:hidden"
              />
            </IconButton>
          )}
        </div>
      </main>
    </div>
  );
};

export default Header;
