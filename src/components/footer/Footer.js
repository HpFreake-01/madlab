import React from "react";
import f from './Footer.module.css'

const Footer = () => {
    return(
        <div className={f.main}>
            <div className={f.main_wrap}>
                <nav>madlabukraine@gmail.com</nav>
                <nav>@2021. Freiheit.</nav>
            </div>
        </div>
    )
}

export default Footer;