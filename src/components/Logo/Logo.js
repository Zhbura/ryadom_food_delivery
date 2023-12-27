import logo from '../../img/logo.svg';
import './Logo.scss';

export const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__img" src={logo} alt="Логотип компании" />
        </div>
    )

}