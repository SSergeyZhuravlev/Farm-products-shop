 import { Title } from '../../ui/Title/Title';
import './OrderChoiceProducts.css';

export const OrderChoiceProducts = ( { products, onChange, onClick } ) => {
    return (
        <section className='order-page__choice-section'>
            <Title priority={3} className='order-page__choice-section__title'>Выберите продукты</Title>
            <ul className='order-page__choice-list'>
                {
                    products.map((product) => {
                        return (
                            <li className='order-page__choice-list__item' key={product.id}>
                                <label className='order-page__choice-list__product' onChange={onChange} onClick={onClick}>
                                    <span className='order-page__choice-list__product__text'>{product.name}</span>
                                    <input className='order-page__choice-list__input' type='checkbox' value={product.price} id={product.id} />
                                    <span className='order-page__choice-list__checkbox'></span>
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}