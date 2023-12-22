"use client";

import { Resizable } from "re-resizable";
import { useState, useEffect } from "react";
import AceEditor from "react-ace";

// themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-cobalt";

//language syntax highlighting
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-golang";

import { initialCode } from "@/lib/constant";

interface CodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  padding: string;
  background: string;
  onCodeChange?: (arg: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  theme,
  icon,
  padding,
  background,
  onCodeChange,
}) => {
  const [width, setWidth] = useState<number>(800);
  const [height, setHeight] = useState<number>(500);
  const [title, setTitle] = useState("Untitled-1");
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  // @ts-ignore
  const handleResize = (e, direction, ref, pos) => {
    const updatedHeight = ref.style.height;
    setHeight(parseInt(updatedHeight, 10));
  };

  const updatedSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updatedSize);
    updatedSize();
    return () => window.removeEventListener("resize", updatedSize);
  }, []);

  return (
    <Resizable
      minHeight={466}
      minWidth={510}
      maxWidth={1000}
      defaultSize={{ width: width, height: height }}
      onResize={handleResize}
      className="resizable-container relative rounded-md"
      style={{ background: background }}
    >
      <div
        className="handle handle-top absolute left-1/2 translate-x-[-50%] top-[-4px] w-2 h-2 
            rounded-full bg-slate-300 hover:bg-slate-50"
      ></div>
      <div
        className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
      ></div>
      <div
        className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full 
        bg-slate-300 hover:bg-slate-50 "
      ></div>
      <div
        className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
      ></div>

      <div className="code-block" style={{ padding: padding }}>
        {/* code header  */}
        <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80 rounded-t-md">
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          {/* filename input  */}
          <div className="w-full">
            <input
              type="text"
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
              className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent leading-10"
            />
          </div>

          {/* icon  */}
          <div className="flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm">
            <img src={icon} alt="icon" className="h-8" />
          </div>
        </div>

        <AceEditor
          value={code}
          fontSize={16}
          name="code-editor"
          theme={theme.toLocaleLowerCase()}
          height={`calc(${height}px - ${padding} - ${padding} - 52px)`}
          mode={language.toLocaleLowerCase()}
          wrapEnabled={true}
          showPrintMargin={false}
          showGutter={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="code-editor-wrapper w-[600px] rounded-b-md"
          onChange={handleCodeChange}
        />
      </div>
    </Resizable>
  );
};

export default CodeEditor;
