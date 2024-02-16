import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const NavbarStudio = (props: any) => {
  return (
    <div className="">
      <div className="flex items-center font-bold text-slate-700 marker:flex">
        <Link href="/" className="flex items-center px-8 py-4">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6" />
          <h1>Aller au site</h1>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default NavbarStudio;
