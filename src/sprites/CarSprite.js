import * as React from 'react';

const CarSprite = ({ styles, onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={155.084} // Match the width of other sprites
        height={89.213} // Match the height of other sprites
        viewBox="0 0 512 512" // Adjust viewBox to match dimensions
        style={styles}
        onClick={onClick}
    >
        {/* Car Body */}
        <rect x="70" y="150" width="370" height="100" fill="#3498db" /> {/* Main body */}
        <rect x="90" y="130" width="330" height="50" fill="#2980b9" />  {/* Upper body */}
        
        {/* Windows */}
        <rect x="110" y="140" width="90" height="30" fill="#ecf0f1" /> {/* Left window */}
        <rect x="310" y="140" width="90" height="30" fill="#ecf0f1" /> {/* Right window */}

        {/* Wheels */}
        <circle cx="150" cy="280" r="40" fill="#34495e" /> {/* Left wheel */}
        <circle cx="360" cy="280" r="40" fill="#34495e" /> {/* Right wheel */}
        <circle cx="150" cy="280" r="25" fill="#2c3e50" /> {/* Left wheel inner */}
        <circle cx="360" cy="280" r="25" fill="#2c3e50" /> {/* Right wheel inner */}

        {/* Headlights */}
        <circle cx="70" cy="200" r="10" fill="#f1c40f" /> {/* Left headlight */}
        <circle cx="440" cy="200" r="10" fill="#f1c40f" /> {/* Right headlight */}
    </svg>
);

export default CarSprite;
