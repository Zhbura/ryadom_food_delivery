import { Logo } from "../Logo/Logo";
import { ExpressDelivery } from "./ExpressDelivery/ExpressDelivery";
import "./TopBar.scss";

export const TopBar = () => {
    return (
        <div className="top-bar">
            <Logo />
            <div className="top-bar__wrap">
                <ExpressDelivery />
                <div className="top-bar__min-order">
                    Минимальный заказ: <span>800 ₽</span>
                </div>
            </div>
            <div className="top-bar__wrap top-bar__wrap_last">
                <p>Акции</p>
                <p>График доставки</p>
            </div>
        </div>
    )
}