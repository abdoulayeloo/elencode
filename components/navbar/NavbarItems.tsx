"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface NavbarItemsProps {
  label: string;
  href: string;
}

const NavbarItems = ({ label, href }: NavbarItemsProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);
  const handleClick = () => {
    router.push(href);
  };
  return (
    <button onClick={handleClick}>
      <span className={isActive ? "text-sky-300" : "text-slate-400"}>
        {label}
      </span>
    </button>
  );
};

export default NavbarItems;
