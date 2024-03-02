import { Logo } from "../Logo/Logo";
import { ExpressDelivery } from "./ExpressDelivery/ExpressDelivery";
import { MinOrder } from "./MinOrder/MinOrder";
import "./TopBar.scss";

export const TopBar = () => {
    return (
        <div className="top-bar">
            <Logo />
            <div className="top-bar__wrap">
                <ExpressDelivery />
                <MinOrder />
            </div>
            <div className="top-bar__wrap">
                <p className="top-bar__text">Акции</p>
                <p className="top-bar__text">График доставки</p>
            </div>
        </div>
    )
}