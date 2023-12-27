import "./Menu.scss";

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <button className="menu__btn">
                    <span className="menu__btn-line" />
                    <span className="menu__btn-line" />
                    <span className="menu__btn-line menu__btn-line_short" />
                </button>
                <p className="menu__text">Каталог продуктов</p>
            </div>
        </>
    )
}