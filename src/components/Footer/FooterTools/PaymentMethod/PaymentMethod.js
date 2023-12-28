import "../FooterTools.scss";
import mir from "../../../../img/mir.svg";
import visa from "../../../../img/visa.svg";
import applepay from "../../../../img/applepay.svg";
import googlepay from "../../../../img/googlepay.svg";
import mastercard from "../../../../img/mastercard.svg";
import maestro from "../../../../img/maestro.svg";

export const PaymentMethod = () => {
    const paymentMethod = [
        { key: 1, img: mir, alt: "Оплатить картой мир" },
        { key: 2, img: visa, alt: "Оплатить картой виза" },
        { key: 3, img: applepay, alt: "Оплатить apple pay" },
        { key: 4, img: googlepay, alt: "Оплатить google pay" },
        { key: 5, img: maestro, alt: "Оплатить картой маэстро" },
        { key: 6, img: mastercard, alt: "Оплатить картой мастеркарт" },
    ];
    return (
        <div className="payment-method">
            {paymentMethod.map((item) => (
                <button className="payment-method__item" key={item.key}>
                    <img src={item.img} alt={item.alt} />
                </button>
            ))}
        </div>
    )
}