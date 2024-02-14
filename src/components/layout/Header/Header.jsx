import { Logo } from '../../ui/Logo/Logo';
import { BuyButton } from '../../ui/BuyButton/BuyButton';
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <BuyButton />
        </header>
    )
}