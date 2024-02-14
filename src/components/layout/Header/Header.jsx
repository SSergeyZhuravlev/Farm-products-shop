import { Logo } from '/src/components/ui/Logo/Logo';
import { BuyButton } from '/src/components/ui/BuyButton/BuyButton';
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <BuyButton />
        </header>
    )
}