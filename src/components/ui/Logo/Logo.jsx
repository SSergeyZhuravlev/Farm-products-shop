import farmerLogo from '/src/assets/images/farmer-logo.svg';
import './Logo.css';

export const Logo = () => {
    return (
        <div className="header__logo">
            <img className="header__logo__img" src={farmerLogo} alt="Изображение фермера" />
            <p className="header__logo__text">Фермерские продукты</p>
        </div>
    )
}