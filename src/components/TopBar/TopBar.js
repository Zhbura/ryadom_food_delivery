import { Logo } from "../Logo/Logo";
import "./TopBar.scss";
import express from "../../img/express.svg";

export const TopBar = () => {
    return (
        <>
            <div className="top-bar">
                <Logo />
                <div className="top-bar__wrap">
                    <div className="top-bar__express-delivery">
                        <button className="top-bar__btn" ><span /></button>
                        <img src={express} alt="Доставим за 15 минут" />
                        <p className="top-bar__text">Доставим за 15 минут</p>
                        <button className="top-bar__question-mark"><span>?</span></button>
                    </div>
                    <div className="top-bar__min-order">
                        Минимальный заказ: <span>800 ₽</span>
                    </div>
                </div>
                <div className="top-bar__wrap top-bar__wrap_last">
                    <p>Акции</p>
                    <p>График доставки</p>
                </div>
            </div>
        </>
    )
}