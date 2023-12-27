import "./ExpressDelivery.scss";
import express from "../../../img/express.svg";

export const ExpressDelivery = () => {
    return (
        <div className="express-delivery">
            <button className="express-delivery__btn" ><span /></button>
            <img src={express} alt="Доставим за 15 минут" />
            <p className="express-delivery__text">Доставим за 15 минут</p>
            <button className="express-delivery__question-mark"><span>?</span></button>
        </div>
    )
}