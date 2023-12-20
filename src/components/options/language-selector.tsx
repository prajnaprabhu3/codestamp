import { languages } from "@/lib/constant";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
    <div>
      <p className="py-[5px] text-sm font-medium my-1">Language</p>
      <div className="dropdown-title capitalize w-[120px]">
        {language} <ChevronDown />
      </div>
    </div>
  );
};

export default LanguageSelector;
