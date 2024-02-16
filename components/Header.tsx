import Link from "next/link";

import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl flex-row items-center justify-between px-10 py-5">
      <div>
        <Link href={"/"}>
          <h1>
            <span className="ark:invert rounded-lg bg-gradient-to-r from-sky-300 via-sky-500 to-slate-400 p-2 font-bold">
              Elencode
            </span>
          </h1>
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row items-center justify-center gap-x-2">
        <span>Dark Mode</span>
        <span>{/* <Login /> */}</span>
      </div>
    </header>
  );
};

export default Header;
