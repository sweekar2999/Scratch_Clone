import * as React from 'react';

const SoccerBallSprite = ({ styles, onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={155.084} 
        height={155.084} 
        viewBox="0 0 512 512" 
        style={styles}
        onClick={onClick}
    >
        <circle cx="256" cy="256" r="256" fill="#FFF" /> 
        <path
            fill="#000"
            d="M256,0C114.61,0,0,114.61,0,256s114.61,256,256,256,256-114.61,256-256S397.39,0,256,0Zm-18.13,109.44,32.31,22.32,32.31-22.32,16.63,34.47,38.86,2.83L335.6,180.4l9.53,38.5-33.86,20.4,1.73,38.68L256,274.61l-37.94,22.37,1.73-38.68-33.86-20.4,9.53-38.5-33.38-33.66,38.86-2.83ZM93.86,200.07l36.59,19.45L146.64,260l-1.29,40.29,28.45,24.94L164.8,374.4l-35.47,16.94L103,337.29l-36.66-9.2-14.62-35.47L79.4,273.51Zm324.28,0,28.68,19.11,14.62,35.47-13.31,32.34-36.66,9.2L408,391.34l-25.33,18-28.45-24.94L353.93,260l16.19-40.49Zm-162.2,112.16L256,332.58l36.91-20.35,27.64,22.89-10.07,37.55L256,389.44l-54.48,15.4-10.07-37.55,27.64-22.89Zm-124.92,1.6,32.89,8.26,18.37,33.63L155.75,386,130.68,368.6l-8.61-40.22Zm262.06,0,8.61,40.22-25.07,17.42-22.4-30.11,18.37-33.63ZM245.51,306.82,256,285.39l10.49,21.43-10.49,5.77Z"
        />
    </svg>
);

export default SoccerBallSprite;
