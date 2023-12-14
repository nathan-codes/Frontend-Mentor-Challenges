import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { useState } from "react";
import moonIcon from "../../../public/images/icon-moon.svg"

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
        <select name="font" id="font" >
          <option value="Sans-serif">Sans serif</option>
          <option value="serif">Serif</option>
          <option value="Mono">Mono</option>
        </select>

        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-[#757575] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
        </label>
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
