import React, {useState} from 'react';
import Cards from "./cards"
import {useRef} from 'react';
import Testing from "./Str1el"
import Txtareas1 from './Textareas1';
import Triple from './Triple';
import Container from './Compressing';
import UserBlank from './User_blank';

const Index = function (){
    const [id, SetId] = useState(0)
    function card_selector (id){
        SetId(id);
    }
    let card = Cards()[id][1];
    let user_id = 0;
    let UserData = UserBlank()[user_id][1];
    
    return (
        <div className="Card_1">
            <p className="Table-header">Basic Table</p>
            <div className="Header">
                <div className="Header_top">
                    <div className="lft_container">
                        <div className="grid_header">
                            <div className="Element element1">
                                Проффесия
                            </div>
                            <section className="str_header  grid_center"><p className="inputs">{card.Proffesion}</p></section>
                        </div>
                    </div>
                    <div className="right_container">
                        <div className="grid_header">
                            <div className="Element element1">
                                Игрок
                            </div>
                            <section className="str_header grid_center"><p className="inputs">{"3 "}</p></section>
                        </div>
                    </div>
                </div>
                <div className="header_btm">
                    <section className="goal">Цель: выйти из "крысиных гонок" на "Быстрый путь", создавая свой Пассивный доход, чтобы он стал больше чем ваши общие Расходы</section>
                </div>
            </div>
            <div className="title1">
                Ведомость расходов и доходов
            </div>
            <div className="Body">
                <div className="lft_container">
                    <div className="Container">
                        <div className="Element">Доходы</div>
                        <div className="Container_content grd_test">
                            <div className="Inc_descrption">
                                <div className="grid_2">
                                    <section className="str_sp1">Описание</section>
                                    <section className="str_sp1">Доход</section>
                                </div>
                                <Testing title={"Заработок"} value={card.Income}/>
                                <Testing title={"Капиталовложения"} value={card.Income}/>
                                <Txtareas1 title={"Диведенды"}/>
                                <Txtareas1 title={"Недвижимость"}/>
                                <Txtareas1 title={"Бизнес"}/>
                            </div>
                        </div>
                    </div>
                    <div className="Container">
                        <div className="Element">Expanses</div>
                        <div className="Container_content">
                            <div className="Inc_descrption">
                                
                                <Testing title={"Налоги"} value={card.Taxes}/>
                                <Testing title={"Оплата ипотеки и арендная платa"} value={card.Mortage_payments_rent}/>
                                <Testing title={"Оплата закладной на дом:"} value={card.Home_mortgage_payment}/>
                                <Testing title={"Оплата кредита на образование:"} value={card.School_loan_payment}/>
                                <Testing title={"Оплата кредита на автомобиль:"} value={card.Car_load_payment}/>
                                <Testing title={"Выплаты по кредитной карточке:"} value={card.Credit_card_payment}/>
                                <Testing title={"Выплаты по мелким кредитам:"} value={card.Small_credit_payment}/>
                                <Testing title={"Розничные расходы:"} value={" None "}/>
                                <Testing title={"Другие расходы:"} value={card.Other_expanses}/>
                                <Testing title={"Оплата кредита банка:"} value={card.Bank_loan_payment}/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="right_container">
                    <div className="Container auditor_container">
                        <div className="Container_content">
                            <div className="Element auditor_element">Auditor</div>
                            <div className="title4">Computure</div>
                        </div>
                        <div className="vertical_auditor_container">
                            <div className="Container_content">
                                <div className="auditor_content">
                                    <div className="Inc_descrption">
                                        <section className="auditor_content">
                                        <Testing title={"Пассивный доход"} value={" None "}/>

                                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;Денежный поток от капиталовложений <br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Дивиендов <br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Аренды недвижемости<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Бизнеса
                                            <section className="income_block">
                                                <div className="inc_blc_2">
                                                    <p className="grid_main all_expanses">Общий расход</p>
                                                    <input className="inputs_2 all_expanses_input"></input>
                                                </div>
                                            </section>
                                        </section>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="vertical_auditor_container_2">
                            <div className="Container_content">
                                <div className="auditor_content">
                                    <div className="Inc_descrption">
                                        <Testing title={"Количество детей"} value={" None "}/>
                                        <Testing title={"Расходы На ребенка"} value={" None "}/>

                                    </div>
                                    <section className="expanses_block">
                                        <div className="inc_blc_2">
                                            <p className="grid_main all_expanses">Общий расход</p>
                                            <input className="inputs_2 all_expanses_input"></input>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testing title={"Ежемесячный денежный поток:"} value={" None "}/>
            <div className="Footer">
                <div className="title3">Балансовый отсчёт</div>
                <div className="Container">
                    <div className="sp_div1">
                        <div className="Element assets_element">Активы</div> <div className="Element passiv_element">Пассивы</div>
                    </div>
                    <div className="Container_content">
                        <div className="right_container_1">
                            <div className="grid_2">
                                <section className="str1 grid_main">Сбережения:</section>
                                <section className="str1"><input className="inputs_2"></input></section>
                                
                            </div>

                            <Triple title1={"Акции/взаимные фонды/:"} title2={"Депозиты Число акций:"} title3={"Цена/Сумма:"}/>
                            <Triple title1={"Недвижимость:"} title2={"Первый Взнос:"} title3={"Цена:"}/>
                            <Triple title1={"Бизнес:"} title2={"Первый Взнос:"} title3={"Цена:"}/>

                        </div>
                        <div className="lft_container_1">

                            <Testing title={"Ипотека:"} value={card.Mortage}/>
                            <Testing title={"Закладная на дом:"} value={card.Home_mortage}/>
                            <Testing title={"Кредит на образование:"} value={card.School_loans}/>
                            <Testing title={"Кредит на автомобиль:"} value={card.Car_loans}/>
                            <Testing title={"Долг по кредитным карточка:"} value={card.Credit_card_debt}/>
                            <Testing title={"Розничный долг:"} value={card.Small_credit}/>
           
                            <Txtareas1 title={"По закладным:"}/>
                            <Txtareas1 title={"Пассивы:"}/>
                            <Txtareas1 title={"Кредит банка:"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;