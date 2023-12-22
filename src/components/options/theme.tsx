"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { themes } from "@/lib/constant";
import OutsideClickHandler from "react-outside-click-handler";

interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Theme: React.FC<ThemeProps> = ({ theme, setTheme }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <p className="py-[5px] text-sm font-medium my-1">Language</p>
      <div
        className="dropdown-title capitalize w-[120px] cursor-pointer"
        onClick={toggleDropdown}
      >
        {theme} <ChevronDown />
      </div>

      {showDropdown && (
        <div
          onClick={toggleDropdown}
          className="dropdown-menu w-[120px] flex flex-col mt-1 cursor-pointer py-2"
        >
          {themes.map((item) => (
            <div key={item}>
              <button
                className="dropdown-item text-sm text-start w-28 px-2 py-[4px] mx-[2px] hover:bg-zinc-800 transition-all duration-100 ease-in rounded "
                onClick={() => handleThemeChange(item)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      )}
    </OutsideClickHandler>
  );
};

export default Theme;
