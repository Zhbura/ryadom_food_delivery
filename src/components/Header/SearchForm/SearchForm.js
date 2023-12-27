import "./SearchForm.scss";
import search from "../../../img/search.svg";

export const SearchForm = () => {
    return (
        <>
            <form className="search-form">
                <input type="text" placeholder="Поиск по товарам, рецептам и статьям" />
                <img src={search} alt="Поиск" />
            </form>
        </>
    )
}