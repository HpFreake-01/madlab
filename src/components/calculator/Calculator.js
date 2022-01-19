import React from "react";
import c from "./Calculator.module.css"

const Calculator = () => {
    return(
        <div className={c.main}>
            <div className={c.main_wrap}>
                <nav className={c.title}>
                    Калькулятор стоимости
                </nav>
                <div className={c.items}>
                    <div className={c.item}>
                        <nav className={c.item__number}>001</nav>
                        <div className={c.item__buttom}>Интернет магазин</div>
                        <div className={c.item__buttom}>Сайт визитка</div>
                        <div className={c.item__buttom}>Доработка сайта</div>
                        <div className={c.item__buttom}>Лендинг</div>
                        <div className={c.item__buttom}>Бизнес сайт</div>
                        <div className={c.item__buttom}>Копоративный сайт</div>
                        <div className={c.item__buttom}>Редизайн сайта</div>
                        <div className={c.item__buttom}>Дизайн сайта</div>
                    </div>
                    <div className={c.item}>
                        <nav className={c.item__number}>002</nav>
                        <div className={c.item__buttom}>Дизайн уже есть (Ваш)</div>
                    </div>
                    <div className={c.item}>
                        <nav className={c.item__number}>003</nav>
                        <div className={c.item__buttom}>ПК + Смартфон</div>
                        <div className={c.item__buttom}>ПК + Планшет + Смартфон</div>
                    </div>
                    <div className={c.item}>
                        <nav className={c.item__number}>004</nav>
                        <div className={c.item__buttom}>Собственный движок</div>
                        <div className={c.item__buttom}>CMS Wordpress</div>
                        <div className={c.item__buttom}>OpenCart</div>
                        <div className={c.item__buttom}>Без движка</div>
                    </div>
                </div>
                <br/>
                <br/>
                <hr/>
            </div>
            <div className={c.start}>
                <div className={c.start__wrap}>
                    <div className={c.start__text}>
                        от 14 дней * от 470$
                    </div>
                    <div className={c.start__button}>Начать проект</div>
                </div>
            </div>
        </div>
    )
}

export default Calculator