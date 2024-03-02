import "./Delivery.scss";
import geometka from "../../../img/geometka.svg";

export const Delivery = () => {
    return (
        <>
            <form className="delivery">
                <img src={geometka} alt="Геометка. Куда доставить?" />
                <input type="text" placeholder="Куда доставить?" />
            </form>
        </>
    )
}