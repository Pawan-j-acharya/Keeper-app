import React from "react";

const currentYear = new Date().getFullYear();


function Footer(){
    return <footer className="footer">
                <p>copyright &copy; {currentYear}</p>
           </footer>
}

export default Footer;