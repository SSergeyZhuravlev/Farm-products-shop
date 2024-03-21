import { useState } from 'react';
import { Title } from '../../ui/Title/Title';
import { BuyButton } from '../../ui/BuyButton/BuyButton';
import './OrderPrice.css';

export const OrderPrice = ( { orderList } ) => {
    const [adress, setAdress] = useState('');

    return (
        <section className='order-page__price-section'>
            <Title priority='3' className='order-page__price-section__title'>Сделать заказ</Title>
            <input className='order-page__price-section__input' type="text" value={adress} placeholder='Введите адрес доставки' onChange={(e) => setAdress(e.target.value)} />
            <div className='order-page__price-section__price'>
                <Title priority='4' className='order-page__price-section__price__title'>Цена</Title>
                <p className='order-page__price-section__price__text'>
                    {orderList.length ? `${orderList.reduce((sum, item) => sum + item.price, 0)} руб.` : `0 руб.`}
                </p>
            </div>
            <BuyButton onClick={() => {
                {
                    for(const item of orderList) {
                        alert(`Ваш заказ: ${item.product}, стоимость: ${item.price}. Доставим по адресу: ${adress}`);
                    }
                }
            }}>Купить</BuyButton>
        </section>
    )
}