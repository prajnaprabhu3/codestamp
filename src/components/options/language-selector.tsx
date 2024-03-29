import { languages } from "@/lib/constant";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  setLanguage,
  setActiveIcon,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    const currentLanguageObject = languages.find(
      (langArg) => langArg.name === lang
    );

    if (currentLanguageObject) {
      setActiveIcon(currentLanguageObject.icon);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <p className="py-[5px] text-sm font-medium my-1">Language</p>
      <div
        className="dropdown-title capitalize w-[120px] cursor-pointer"
        onClick={toggleDropdown}
      >
        {language} <ChevronDown />
      </div>

      {showDropdown && (
        <div
          onClick={toggleDropdown}
          className="dropdown-menu w-[120px] flex flex-col mt-1 cursor-pointer py-2"
        >
          {languages.map((item) => (
            <div>
              <button
                key={item.name}
                className="dropdown-item text-sm text-start w-28 px-2 py-[4px] mx-[2px] hover:bg-zinc-800 transition-all duration-100 ease-in rounded "
                onClick={() => handleLanguageChange(item.name)}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </OutsideClickHandler>
  );
};

export default LanguageSelector;
