import './BuyButton.css';

export const BuyButton = ( { children, onClick, className } ) => {
    return <button className={`btn buy-btn ${className}`} onClick={onClick}>{children}</button>
}