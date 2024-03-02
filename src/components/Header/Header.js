import './Header.scss';
import { SearchForm } from './SearchForm/SearchForm';
import { Delivery } from './Delivery/Delivery';
import { ToolBar } from './ToolBar/ToolBar';
import { Menu } from './Menu/Menu';
import { Logo } from '../Logo/Logo';

export const HeaderBig = () => {
    return (
        <>
            <header className="header-big">
                <Menu />
                <div className="header-big__forms">
                    <SearchForm />
                    <Delivery />
                </div>
                <ToolBar />
            </header>
        </>
    )
}

export const HeaderSmall = () => {
    return (
        <>
            <header className="header-small">
                <div className="header-small__container">
                    <div className="header-small__wrap">
                        <Logo />
                        <Menu />
                    </div>
                    <ToolBar />
                </div>
                <SearchForm />
            </header>
        </>
    )
}