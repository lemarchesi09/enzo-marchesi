import React from "react"
import TopLogo from "../../assets/top-logo.svg"

const Footer = () =>{
    return(
        <footer className="footer">
            <p>2020 © All rights reserved.</p>
            <a href="#home"><img src={TopLogo} alt="Logo footer"/></a>
        </footer>
    )
}

export default Footer