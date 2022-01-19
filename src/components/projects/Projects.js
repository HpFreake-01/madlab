import React from "react";
import img2 from '../../img/img_2.png'
import img1 from '../../img/img_1.png'
import img3 from '../../img/img_3.png'
import p from './Projects.module.css'
const Projects = () => {
    return(
        <div className={p.main}>
            <div className={p.text}>
                <nav className={p.title_one}>Проекты</nav>
                <nav className={p.title_two}>Все проекты</nav>
            </div>
            <div className={p.examples}>
                <div className={p.example_one}>
                   <div className={p.ex_wrap}>
                       <nav className={p.ex_title}>Adviser</nav>
                       <nav className={p.ex_name}>Дизайн приложения социальной сети</nav>
                       <img className={p.img__one} src={img1}/>
                   </div>
                </div>
                <div className={p.example_two}>
                    <div className={p.ex_wrap}>
                        <nav className={p.ex_title}>Tiny Linens</nav>
                        <nav className={p.ex_name}>Сайт для бренда десткой одежды в Канаде</nav>
                        <img className={p.img__two} src={img2}/>
                    </div>
                </div>
                <div className={p.example_three}>
                    <div className={p.ex_wrap}>
                        <nav className={p.ex_title}>Movieology</nav>
                        <nav className={p.ex_name}>Дизайн веб-помощника для поиска фильмов</nav>
                        <img className={p.img__three} src={img3} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;