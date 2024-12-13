import React from "react";
import "./Nav.css";

function Navbar() {

    const sentence = "Food Wagon";
    const color = ["red", "orange"];
    return (
        
        <nav className="grid-container">
            <div className="grid-item1">
            {sentence.split(" ").map((word, index) => (
                    <span
                        key={index}
                        style={{ color: color[index % color.length] }}
                    >
                        {word}{" "}
                    </span>
                ))}
            </div>
            <div className="grid-item2">Deliver to:  Current Location Mohammadpur Bus Stand, Dhaka</div>
            <div className="grid-item3">
                <a>Search Food</a>
                <button className="search-button">Login</button>
            </div>
        </nav>
    );
}

export default Navbar;
