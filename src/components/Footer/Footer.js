import React from "react";
import './footer.css';

const Footer = ({counter}) => {
    return (
        <div className="footer">
            <div>
                <h6>x (you)</h6>
                <span>{counter.cross}</span>
            </div>

            <div>
                <h6>Ties</h6>
                <span>{counter.ties}</span>
            </div>

            <div>
                <h6>o (cpu)</h6>
                <span>{counter.circle}</span>
            </div>
        </div>
    );
};

export default Footer;