"use client";

import { Resizable } from "re-resizable";
import AceEditor from "react-ace";
import { useState, useEffect } from "react";

// themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";

//language syntax highlighting
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-golang";

interface CodeEditorProps {
  language: string;
  theme?: string;
  icon?: string;
  padding?: string;
  background?: string;
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
  const [width, setWidth] = useState<number>(1000);
  const [height, setHeight] = useState<number>(500);

  // @ts-ignore
  const handleResize = (e, direction, ref, pos) => {
    const updatedHeight = ref.style.height;
    setHeight(parseInt(updatedHeight));
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
      className="resizable-container relative "
    >
      <div className="code-block">
        {/* code header  */}
        <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80">
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          {/* filename input  */}
          <div className="w-full">
            <input
              type="text"
              className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent"
            />
          </div>

          {/* icon  */}
          <div className="flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm">
            <img src={icon} alt="icon" className="h-10" />
          </div>
        </div>

        <AceEditor
          value="function(){return 'Hello worl'}"
          fontSize={16}
          name="code-editor"
          theme="monokai"
          mode={language.toLocaleLowerCase()}
          wrapEnabled={true}
          showPrintMargin={false}
          showGutter={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="code-editor-wrapper"
        />
      </div>
    </Resizable>
  );
};

export default CodeEditor;
