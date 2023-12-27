import './Header.scss';
import { SearchForm } from './SearchForm/SearchForm';
import { Delivery } from './Delivery/Delivery';
import { ToolBar } from './ToolBar/ToolBar';
import { Menu } from './Menu/Menu';

export const Header = () => {
    return (
        <>
            <header className="header">
                <Menu />
                <div className="header__forms">
                    <SearchForm />
                    <Delivery />
                </div>
                <ToolBar />
            </header>
        </>
    )
}