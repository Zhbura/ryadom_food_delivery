import "./ToolBar.scss";
import { Cart } from "../SVG/Cart";
import { User } from "../SVG/User";

export const ToolBar = () => {
    return (
        <>
            <div className="tool-bar">
                <button className="tool-bar__user">
                    <User />
                </button>
                <button className="tool-bar__cart">
                    <Cart />
                </button>
                <p className="tool-bar__price-cart">2800 ₽</p>
            </div>
        </>
    )
}