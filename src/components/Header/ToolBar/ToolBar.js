import "./ToolBar.scss";
import user from "../../../img/user.svg";
import cart from "../../../img/cart.svg";

export const ToolBar = () => {
    return (
        <>
            <div className="tool-bar">
                <button className="tool-bar__user">
                    <img src={user} alt="Личный кабинет" />
                </button>
                <button className="tool-bar__cart">
                    <img src={cart} alt="Корзина" />
                </button>
                <p className="tool-bar__price-cart">2800 ₽</p>
            </div>
        </>
    )
}