import { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  let themeContent;
  if (theme === "dark") {
    themeContent = (
      <CiDark
        onClick={() => setTheme("light")}
        className="text-2xl cursor-pointer"
      />
    );
  } else {
    themeContent = (
      <CiLight
        onClick={() => setTheme("dark")}
        className="text-2xl cursor-pointer"
      />
    );
  }
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-10">
      <div className="container flex items-center justify-between gap-x-6">
        <a className="uppercase font-bold text-2xl" href="/">
          Tasker
        </a>
        {themeContent}
      </div>
    </nav>
  );
};

export default Header;
