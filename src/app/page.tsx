"use client";

import CodeEditor from "@/components/code-editor";
import Background from "@/components/options/background";
import LanguageSelector from "@/components/options/language-selector";
import Padding from "@/components/options/padding";
import Theme from "@/components/options/theme";
import { Download } from "lucide-react";

import html2canvas from "html2canvas";

import {
  backgrounds,
  initialCode,
  languages,
  paddings,
  themes,
} from "@/lib/constant";
import { useRef, useState } from "react";
import Footer from "@/components/footer";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [padding, setPadding] = useState(paddings[2]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  // const [code, setCode] = useState(initialCode);

  const ref = useRef(null);

  const saveAsPng = async () => {
    //hide elemnets
    const handleElems = document.querySelectorAll(".handle") as any;
    const cursorElem = document.querySelector(".ace_cursor") as any;

    handleElems.forEach((elem: any) => {
      elem.style.display = "none";
    });

    cursorElem.style.display = "none";

    const editorElem = ref.current;

    if (editorElem) {
      const canvas = await html2canvas(editorElem);
      const png = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      const link = document.createElement("a");
      link.download = "final.png";
      link.href = png;
      link.click();
    }

    //show elements
    handleElems.forEach((elem: any) => {
      elem.style.display = "block";
    });

    cursorElem.style.display = "block";
  };

  return (
    <main className="h-screen flex flex-col items-center ">
      <header className="flex gap-10 mt-6 2xl:mt-12 w-[940px] px-10 py-4 z-10 bg-[#191919] rounded-md border border-[#3C3C3C] shadow-md">
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />

        <Theme theme={theme} setTheme={setTheme} />

        <Background background={background} setBackground={setBackground} />

        <Padding padding={padding} setPadding={setPadding} />

        <div className="my-auto">
          <div
            onClick={saveAsPng}
            className="flex items-center justify-center px-3 py-3  gap-x-3 ml-auto bg-zinc-800 text-gray-400 rounded-lg cursor-pointer hover:text-gray-500 ease-in-out transition-all duration-300"
          >
            <p className="text-md">Export Image</p>
            <Download size={18} />
          </div>
        </div>
      </header>

      <div className="my-12 2xl:my-28" ref={ref}>
        <CodeEditor
          language={language}
          icon={activeIcon}
          theme={theme}
          padding={padding}
          background={background}
        />
      </div>

      <Footer />
    </main>
  );
}
