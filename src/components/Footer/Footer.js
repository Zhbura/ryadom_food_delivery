import "./Footer.scss";
import qr from "../../img/qr.svg";
import appstore from "../../img/appstore.svg";
import googleplay from "../../img/googleplay.svg";
import mir from "../../img/mir.svg";
import visa from "../../img/visa.svg";
import applepay from "../../img/applepay.svg";
import googlepay from "../../img/googlepay.svg";
import mastercard from "../../img/mastercard.svg";
import maestro from "../../img/maestro.svg";

export const Footer = () => {
    return (
        <>
            <div className="footer-background"></div>
            <div className="footer">
                <div className="footer__wrap footer__wrap_top">
                    <div className="footer__text">
                        <h3 className="footer__title">Помощь покупателю</h3>
                        <ul className="footer__list">
                            <li className="footer__list-item">Доставка и оплата</li>
                            <li className="footer__list-item">График доставки</li>
                            <li className="footer__list-item">Возврат продукции</li>
                            <li className="footer__list-item">Рецепты</li>
                        </ul>
                    </div>
                    <div className="footer__text">
                        <h3 className="footer__title">О  компании</h3>
                        <ul className="footer__list">
                            <li className="footer__list-item">О нас</li>
                            <li className="footer__list-item">Качество</li>
                            <li className="footer__list-item">Контакты</li>
                        </ul>
                    </div>
                    <div className="footer__text">
                        <h3 className="footer__title">Партнеры</h3>
                        <ul className="footer__list">
                            <li className="footer__list-item">Наши производители</li>
                            <li className="footer__list-item">Анкета поставщика</li>
                        </ul>
                    </div>
                    <div className="footer__text">
                        <p className="footer__title">+7 499 653 67 66</p>
                        <p className="footer__title">+7 977 853 38 15</p>
                        <ul className="footer__list">
                            <li className="footer__list-item">Ежедневно с 06:00 – 00:00</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__wrap footer__wrap_middle">
                    <h3 className="footer__title">Скачивайте наше приложение!</h3>
                    <div className="footer__tools">
                        <div className="footer__wrap">
                            <div className="footer__download-app">
                                <button className="footer__download-item">
                                    <img src={qr} alt="Сканируй QR-код и скачивай приложение" />
                                </button>
                                <div className="footer__download-items">
                                    <button className="footer__download-item">
                                        <img src={appstore} alt="Скачай приложение в appstore" />
                                    </button>
                                    <button className="footer__download-item">
                                        <img src={googleplay} alt="Скачай приложение в google play" />
                                    </button>
                                </div>
                            </div>
                            <div className="footer__payment-method">
                                <button className="footer__payment-item">
                                    <img src={mir} alt="Оплатить картой мир" />
                                </button>
                                <button className="footer__payment-item">
                                    <img src={visa} alt="Оплатить картой виза" />
                                </button>
                                <button className="footer__payment-item">
                                    <img src={applepay} alt="Оплатить apple pay" />
                                </button>
                                <button className="footer__payment-item">
                                    <img src={googlepay} alt="Оплатить google pay" />
                                </button>
                                <button className="footer__payment-item">
                                    <img src={maestro} alt="Оплатить картой маэсро" />
                                </button>
                                <button className="footer__payment-item">
                                    <img src={mastercard} alt="Оплатить картой мастеркарт" />
                                </button>
                            </div>
                        </div>
                        <div className="footer__social-networking">
                            <div className="footer__icon"><span>f</span></div>
                            <div className="footer__icon"><span>w</span></div>
                            <div className="footer__icon"><span>f</span></div>
                            <div className="footer__icon"><span>w</span></div>
                        </div>
                    </div>
                </div>
                <div className="footer__wrap footer__wrap_bottom">
                    <p>	&#169; 2019-2021 – Рядом</p>
                    <div className="footer__wrap">
                        <p>Оферта</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </div>
            </div>
        </>
    )
}