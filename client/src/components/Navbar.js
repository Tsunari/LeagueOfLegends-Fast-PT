import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333' }}>
      <div style={{}}>
        <h2 style={{ color: 'white' }}>LoL Combo Trainer</h2>
      </div>
      <div>
        <a href="#home" style={{ color: 'white', margin: '0 10px' }}>Home</a>
        <a href="#about" style={{ color: 'white', margin: '0 10px' }}>About</a>
        <a href="#contact" style={{ color: 'white', margin: '0 10px' }}>Contact</a>
      </div>
      <div>
        <input type="text" placeholder="Search..." style={{ padding: '5px' }} />
      </div>
    </nav>
  );
};

export default Navbar;
