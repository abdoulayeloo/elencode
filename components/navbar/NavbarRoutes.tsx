"use client";
import React from "react";
import NavbarItems from "./NavbarItems";

const navbarRoutes = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "WebDev",
    href: "/webdev",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Github",
    href: "/github",
  },
];

const NavbarRoute = () => {
  const routes = navbarRoutes;
  return (
    <div className="hidden flex-row gap-x-2 md:flex">
      {routes.map((route, index) => (
        <NavbarItems key={index} label={route.label} href={route.href} />
      ))}
    </div>
  );
};

export default NavbarRoute;
