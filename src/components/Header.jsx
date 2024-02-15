import React from "react";

const Header = () => {
    {/* Header */}
    return <header>
        {/* Contenitore dei Leds */}
        <div className="leds-container">
            {/* Led Blu */}
            <div className="led blue-led"></div>
            {/* Led Rosso */}
            <div className="led red-led"></div>
            {/* Led Giallo */}
            <div className="led yellow-led"></div>
            {/* Led Verde */}
            <div className="led green-led"></div>
        </div>
        
        {/* Logo */}
        <div className="logo">
            {/* Immagine del Logo */}
            <img src='../img/pokemon.png' alt="logo" className="img-fluid" width="200" />
        </div>
        </header>;
};

export default Header;