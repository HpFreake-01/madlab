import React from "react";
import s from './Services.module.css'
import window from '../../img/img_7.png'

const Services = () =>{
    return(
        <div className={s.main}>
            <div className={s.main_wrap}>
                <nav className={s.title}>
                    Услуги
                </nav>
                <div className={s.items}>
                    <div className={s.item}>
                        <nav className={s.item__title}>Интернет магазин</nav>
                        <nav className={s.item__price}>от 400$</nav>
                        <img src={window} alt=""/>
                    </div>
                    <div className={s.item}>
                        <nav className={s.item__title}>Сайт визитка</nav>
                        <nav className={s.item__price}>от 400$</nav>
                        <img src={window} alt=""/>
                    </div>
                    <div className={s.item}>
                        <nav className={s.item__title}>Доработка сайта</nav>
                        <nav className={s.item__price}>от 400$</nav>
                        <img src={window} alt=""/>
                    </div>
                    <div className={s.item}>
                        <nav className={s.item__title}>Лендинги</nav>
                        <nav className={s.item__price}>от 400$</nav>
                        <img src={window} alt=""/>
                    </div>
                    <div className={s.item}>
                        <nav className={s.item__title}>Бизнес сайты</nav>
                        <nav className={s.item__price}>от 400$</nav>
                        <img src={window} alt=""/>
                    </div>
                    <div className={s.item}>
                        <nav className={s.item__title}>Корпоративные сайты</nav>
                        <nav className={s.item__price}>от 400$</nav>
                        <img src={window} alt=""/>
                    </div>
                    <div className={s.item}><nav className={s.item__title}>Редизайн сайта</nav>
                        <nav className={s.item__price}>от 400$</nav>
                        <img src={window} alt=""/>
                    </div>
                    <div className={s.item}><nav className={s.item__title}>Дизайн сайта</nav>
                        <nav className={s.item__price}>от 400$</nav>
                        <img src={window} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;