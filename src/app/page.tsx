"use client";

import CodeEditor from "@/components/code-editor";
import LanguageSelector from "@/components/options/language-selector";
import { languages } from "@/lib/constant";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  return (
    <main className="h-screen flex flex-col items-center ">
      <div className="my-20">
        <CodeEditor language={language} icon={activeIcon} />
      </div>

      <header className="mt-6 w-[940px] p-10 z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md">
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />
      </header>
    </main>
  );
}
