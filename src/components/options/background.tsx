"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { backgrounds } from "@/lib/constant";
import OutsideClickHandler from "react-outside-click-handler";

interface BackgroundProps {
  background: string;
  setBackground: (bg: string) => void;
}

const Background: React.FC<BackgroundProps> = ({
  background,
  setBackground,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBackgroundChange = (newBg: string) => {
    setBackground(newBg);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <p className="py-[5px] text-sm font-medium my-1">Background</p>
      <div
        className="dropdown-title capitalize w-[62px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <div
          className="rounded-full w-[20px] h-[20px]"
          style={{ background: background }}
        ></div>
        <ChevronDown />
      </div>

      {showDropdown && (
        <div
          onClick={toggleDropdown}
          className="dropdown-menu w-[62px] flex flex-col items-center mt-1 cursor-pointer py-2"
        >
          {backgrounds.map((item) => (
            <div key={item}>
              <button
                className="dropdown-item text-sm text-start rounded-full w-[20px] h-[20px] px-2 py-[4px] mx[2px] my-1 hover:bg-zinc-800 transition-all duration-100 ease-in"
                style={{ background: item }}
                onClick={() => handleBackgroundChange(item)}
              >
                {" "}
              </button>
            </div>
          ))}
        </div>
      )}
    </OutsideClickHandler>
  );
};

export default Background;
