import './Header.scss';
import burger_menu from "../../img/burger_menu.svg";
import search from "../../img/search.svg";
import geometka from "../../img/geometka.svg";
import user from "../../img/user.svg";
import cart from "../../img/cart.svg";

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__catalog">
                    <img className="header__burger-menu" src={burger_menu} alt="Открыть каталог продуктов" />
                    Каталог продуктов
                </div>
                <div className="header__forms">
                    <form className="header__search-form">
                        <input type="text" placeholder="Поиск по товарам, рецептам и статьям" />
                        <img src={search} alt="Поиск" />
                    </form>
                    <form className="header__delivery">
                        <img src={geometka} alt="Геометка. Куда доставить?" />
                        <input type="text" placeholder="Куда доставить?" />
                    </form>
                </div>
                <div className="header__tool-bar">
                    <button className="header__user">
                        <img src={user} alt="Личный кабинет" />
                    </button>
                    <button className="header__cart">
                        <img src={cart} alt="Корзина" />
                    </button>
                    <p className="header__price-cart">2800 ₽</p>
                </div>
            </header>
        </>
    )
}