import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <Link href={"/"}>
        <h1><span>Lodev{"'"} Blog</span></h1>
        </Link>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
