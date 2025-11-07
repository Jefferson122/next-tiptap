"use client";

import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "../../assets/logo1.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const isEditPage = pathname === "/";

  return (
    <header className="sticky z-50 top-0 px-6 border-b border-neutral-300 dark:border-neutral-700 bg-white/20 dark:bg-[#0d101820] backdrop-blur-lg">
      <div className="h-16 max-w-screen-xl w-full mx-auto flex items-center justify-between gap-6">
        <Link href="/">
          <Logo width={200} />
        </Link>
        <div className="flex gap-5">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
