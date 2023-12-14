import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { useState } from "react";
import moonIcon from "../../../public/images/icon-moon.svg";
import ThemeToggle from "./ThemeToggle";
function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Sans Serif");

  const handleFontSelect = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <nav className="flex justify-between">
      <Image alt="dictionary-logo" src={logo} />

      <div className="right-Section flex  items-center space-x-3 ">
        <select name="font" id="font">
          <option value="Sans-serif">Sans serif</option>
          <option value="serif">Serif</option>
          <option value="Mono">Mono</option>
        </select>

        <ThemeToggle />
        <Image
          src={moonIcon}
          className="text-red-600"
          alt="dark theme icon logo"
        />
      </div>
    </nav>
  );
}

export default Navbar;
