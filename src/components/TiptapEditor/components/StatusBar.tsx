import React, { memo } from "react";
import { useEditorState } from "@tiptap/react";
import { Toolbar } from "./ui/Toolbar";
import MenuButton from "./MenuButton";
import { useTiptapContext } from "./Provider";

const StatusBar = () => {
  const { editor, isFullScreen, isSourceMode, toggleFullScreen, toggleSourceMode } =
    useTiptapContext();
    
  const counter = useEditorState({
    editor,
    selector: (ctx) => ({
      words: ctx.editor.storage.characterCount.words(),
      characters: ctx.editor.storage.characterCount.characters(),
    }),
  });

  return (
    <div className="rte-status-bar flex flex-col sm:flex-row items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
      <Toolbar dense className="mb-2 sm:mb-0">
        <MenuButton
          icon="SourceCode"
          text="Source Code"
          active={isSourceMode}
          onClick={toggleSourceMode}
        />
        <MenuButton
          icon={isFullScreen ? "Minimize" : "Maximize"}
          text="Fullscreen"
          active={isFullScreen}
          onClick={toggleFullScreen}
        />
      </Toolbar>

      <div className="rte-counter flex gap-4 text-sm sm:text-base">
        <span className="rte-word-count">Words: {counter.words}</span>
        <span className="rte-character">Characters: {counter.characters}</span>
      </div>
    </div>
  );
};

export default memo(StatusBar);
