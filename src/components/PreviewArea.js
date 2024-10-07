import React from "react";
import SpriteControls from "./SpriteControls";
import SpriteScratch from "./SpriteScratch";

export default function PreviewArea() {
  return (
    <div className="flex flex-col h-full w-full p-2 bg-blue-300">
      <SpriteScratch />
      <SpriteControls />
    </div>
  );
}
