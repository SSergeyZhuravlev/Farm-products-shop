import './BuyButton.css';

export const BuyButton = ( { children, onClick } ) => {
    return <button className="btn buy-btn" onClick={onClick}>{children}</button>
}