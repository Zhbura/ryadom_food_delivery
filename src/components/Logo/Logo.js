import logo from '../../img/logo.svg';
import './Logo.scss';

export const Logo = () => {
    return (
        <div className="logo">
            <div className="logo__wrap-img">
                <img className="logo__img" src={logo} alt="Логотип компании" />
            </div>
            <p className="logo__text">Рядом<br />
                <span>место, где полезное вкусно</span></p>
        </div>
    )

}