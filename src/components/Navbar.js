import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-light-blue-500 p-4">  
      <div className="container mx-auto flex justify-start">
        <a href="/">
          <img 
            src="/Logo.png"  
            alt="MIT Scratch Logo" 
            className="h-10 w-auto" 
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
