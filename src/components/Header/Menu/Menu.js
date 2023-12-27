import "./Menu.scss";
import burger_menu from "../../../img/burger_menu.svg";

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <img className="menu__img" src={burger_menu} alt="Открыть каталог продуктов" />
                Каталог продуктов
            </div>
        </>
    )
}