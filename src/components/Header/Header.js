import React from "react";
import './header.css';

const Header = ({ selected, handleReset }) => {
    return (
        <div className="header">
            <div>
                <span>x</span>
                <span>o</span>
            </div>

            <button className='turn'>
                <span>{selected}</span> turn
            </button>

            <button className='reset' onClick={handleReset}>
                <i className="fa-solid fa-arrow-rotate-right"/>
            </button>
        </div>
    );
};

export default Header;