import { OrderChoiceProducts } from '/src/components/blocks/OrderChoiceProducts/OrderChoiceProducts';
import { OrderProductsSlider } from '/src/components/blocks/OrderProductsSlider/OrderProductsSlider';
import { OrderPrice } from '/src/components/blocks/OrderPrice/OrderPrice';
import './OrderPage.css';

// Передаем в компонент итоговый заказ
const orderList = [
    {
        product: 'Филе ягненка',
        price: 1200,
    },
];

export const OrderPage = () => {
    return (
        <>
            <div className='order-page__order-block'>
                <OrderChoiceProducts />
                <OrderPrice orderList={orderList} />
            </div>
                <OrderProductsSlider />
        </>
    )
}