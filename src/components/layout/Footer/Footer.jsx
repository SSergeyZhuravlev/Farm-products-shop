import { Logo } from '/src/components/ui/Logo/Logo';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Logo />
            <p className='footer__create'>Создано 2021</p>
        </footer>
    )
}