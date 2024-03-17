import { useState } from 'react';
import { Title } from '../../ui/Title/Title';
import { BuyButton } from '../../ui/BuyButton/BuyButton';

export const OrderPrice = ( { orderList } ) => {
    const [adress, setAdress] = useState('');

    return (
        <section>
            <Title priority='3' className='order-page__order-price__title'>Сделать заказ</Title>
            <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} />
            <div>{orderList[0].price}</div>
            <BuyButton onClick={() => {
                alert(`Ваш заказ: ${orderList[0].product}, стоимость: ${orderList[0].price}. Доставим по адресу: ${adress}`);
            }}>Купить</BuyButton>
        </section>
    )
}