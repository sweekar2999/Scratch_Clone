import * as React from 'react';

const CarSprite = ({ styles, onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={155.084} 
        height={89.213} 
        viewBox="0 0 512 512" 
        style={styles}
        onClick={onClick}
    >
        <rect x="70" y="150" width="370" height="100" fill="#3498db" /> 
        <rect x="90" y="130" width="330" height="50" fill="#2980b9" />  
        
        
        <rect x="110" y="140" width="90" height="30" fill="#ecf0f1" /> 
        <rect x="310" y="140" width="90" height="30" fill="#ecf0f1" /> 

        
        <circle cx="150" cy="280" r="40" fill="#34495e" /> 
        <circle cx="360" cy="280" r="40" fill="#34495e" /> 
        <circle cx="150" cy="280" r="25" fill="#2c3e50" /> 
        <circle cx="360" cy="280" r="25" fill="#2c3e50" /> 

      
        <circle cx="70" cy="200" r="10" fill="#f1c40f" /> 
        <circle cx="440" cy="200" r="10" fill="#f1c40f" /> 
    </svg>
);

export default CarSprite;
