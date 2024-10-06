import React from "react";

export default function BirdSprite({ styles, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      style={styles}
      onClick={onClick}
    >
      <g id="body">
        <path
          d="M50,20 C70,20 80,40 80,50 C80,60 70,80 50,80 C30,80 20,60 20,50 C20,40 30,20 50,20 Z"
          fill="#FFD54F"
          stroke="#3E2723"
          strokeWidth="2"
        />
        <path
          d="M30,50 C20,50 15,60 15,60 C20,70 30,70 30,60 C30,55 30,50 30,50 Z"
          fill="#FFD54F"
          stroke="#3E2723"
          strokeWidth="2"
        />
        <path
          d="M70,50 C80,50 85,60 85,60 C80,70 70,70 70,60 C70,55 70,50 70,50 Z"
          fill="#FFD54F"
          stroke="#3E2723"
          strokeWidth="2"
        />
      </g>
      <g id="wings">
        <path
          d="M40,40 C30,30 40,20 50,30 C60,20 70,30 60,40"
          fill="#FF9800"
          stroke="#3E2723"
          strokeWidth="2"
        />
        <path
          d="M40,60 C30,70 40,80 50,70 C60,80 70,70 60,60"
          fill="#FF9800"
          stroke="#3E2723"
          strokeWidth="2"
        />
      </g>
      <g id="beak">
        <polygon
          points="50,35 55,37 50,39"
          fill="#FF5722"
          stroke="#3E2723"
          strokeWidth="1"
        />
      </g>
      <g id="eyes">
        <circle cx="45" cy="30" r="3" fill="#3E2723" />
        <circle cx="55" cy="30" r="3" fill="#3E2723" />
      </g>
    </svg>
  );
}
