import React from "react";
import headCss from './Header.module.css'
import img4 from '../../img/img_4.png'

const Header = () => {
    return(
        <div className={headCss.header}>
           <div className={headCss.container}>
               <div className={headCss.header__inner}>
                  <div className={headCss.header_logo}>
                      <a href="#" className={headCss.logo__title}>Mad<nav>lab</nav></a>
                  </div>
                   <nav className={headCss.nav}>
                       <a href="#" className={headCss.nav__link}>Работы</a>
                       <a href="#" className={headCss.nav__link}>Услуги</a>
                       <a href="#" className={headCss.nav__link}>Кто мы</a>
                   </nav>
               </div>
           </div>
            <div className={headCss.content}>
                <div className={headCss.content__left}>
                    <div className={headCss.left_block}>
                        <p>Pазрабатываем<br/> эффективные решения под соусом творчества</p>
                        <nav>Веб-студия Boring Art</nav>
                    </div>
                </div>
                <div className={headCss.content__right}>
                    <div className={headCss.right_block}>
                        <img src={img4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;