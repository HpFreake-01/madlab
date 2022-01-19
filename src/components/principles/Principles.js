import React from "react";
import pr from './Principles.module.css'

 const Principles = () => {
     return(
         <div className={pr.main}>
             <div className={pr.main_wrap}>
                 <nav className={pr.title}>
                     Наши принципы
                 </nav>
                 <div className={pr.items}>
                     <div className={pr.item}>
                         <nav className={pr.item__number}>001</nav>
                         <nav className={pr.item__text}>
                             Мы всегда честны с клиентами.<br/>
                             Слышим, предлагаем и не боимся говорить «нет»
                         </nav>
                     </div>
                     <div className={pr.item}>
                         <nav className={pr.item__number}>002</nav>
                         <nav className={pr.item__text}>Обратная связь в удобных для Вас<br/> каналах коммуникации на ежедневной основе</nav>
                     </div>
                     <div className={pr.item}>
                         <nav className={pr.item__number}>003</nav>
                         <nav className={pr.item__text}>Держим в курсе на каждом этапе<br/> работы, чтоб вы могли наблюдать за процессом</nav>
                     </div>
                     <div className={pr.item}>
                         <nav className={pr.item__number}>004</nav>
                         <nav className={pr.item__text}>Мы максимально вникаем в<br/> бизнес-процессы и проектируем рабочий дизайн</nav>
                     </div>
                 </div>
             </div>
         </div>
     )
}

export default Principles