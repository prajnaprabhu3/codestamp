"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import OutsideClickHandler from "react-outside-click-handler";
import { paddings } from "@/lib/constant";

interface PaddingProps {
  padding: string;
  setPadding: (padding: string) => void;
}

const Padding: React.FC<PaddingProps> = ({ padding, setPadding }) => {
  const handlePaddingChange = (newPadding: string) => {
    setPadding(newPadding);
  };

  return (
    <div>
      <p className="py-[5px] text-sm font-medium my-1">Padding</p>

      <div className="flex gap-3 items-center">
        {paddings.map((item) => (
          <button
            key={item}
            onClick={() => handlePaddingChange(item)}
            className={`h-8 text-sm px-2 py-1 rounded-md hover:text-gray-200 ease-linear transition-all duration-400 cursor-pointer ${
              padding === item && "bg-[#3C3C3C] text-gray-300"
            } `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Padding;
