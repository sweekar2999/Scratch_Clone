import { SpriteImage } from "./Sprite";
import React from "react";

const SpriteCard = ({ spriteName, onClick, selected }) => {
    return (
        <div
            className={`border-2 rounded-lg p-6 m-2 flex flex-col items-center justify-center cursor-pointer 
                transition-all duration-300 
                transform hover:scale-105 hover:bg-gray-200 hover:shadow-xl 
                ${selected ? "border-purple-500" : "border-gray-300"}`}
            onClick={onClick}
        >
            <SpriteImage spriteName={spriteName} styles={{ width: "60px", height: "60px" }} />
            <p className="text-sm font-semibold mt-2">{spriteName}</p>
        </div>
    );
};

export default SpriteCard;
