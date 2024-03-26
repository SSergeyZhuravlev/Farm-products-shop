import { Link, useLocation } from 'react-router-dom';
import { Logo } from '/src/components/ui/Logo/Logo';
import './Header.css';

export const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className='header'>
            <Logo />
            {
                pathname === '/' ?
                <Link to='/order-page' className='btn buy-btn'>Купить</Link>
                : <Link to='/' className='btn btn-back'>Главная</Link>
            } 
        </header>
    )
}