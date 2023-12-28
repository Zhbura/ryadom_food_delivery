import "./Footer.scss";
import { DownloadApp } from "./FooterTools/DownloadApp/DownloadApp";
import { PaymentMethod } from "./FooterTools/PaymentMethod/PaymentMethod";
import { SocialNetworking } from "./FooterTools/SocialNetworking/SocialNetworking";

export const Footer = () => {

    return (
        <>
            <div className="footer-background" />
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
                    <div className="footer-tools">
                        <div className="footer__wrap">
                            <DownloadApp />
                            <PaymentMethod />
                        </div>
                        <SocialNetworking />
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