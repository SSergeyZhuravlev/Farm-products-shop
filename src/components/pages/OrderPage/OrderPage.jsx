import { useEffect, useState } from 'react';
import { OrderChoiceProducts } from '/src/components/blocks/OrderChoiceProducts/OrderChoiceProducts';
import { OrderProductsList, getNodesList } from '/src/components/blocks/OrderProductsList/OrderProductsList';
import { OrderPrice } from '/src/components/blocks/OrderPrice/OrderPrice';
import { products } from '../../../mocks/products';
import './OrderPage.css';

export const OrderPage = () => {
    let [orderList, setOrderList] = useState([]);
    const [activeId, setActiveId] = useState();

    useEffect(() => {
        setTimeout(() => {
            setActiveId(null)
        }, 600)
    })

    function handleCheckProduct(id, textContent, value) {
        getNodesList.get(Number(id)).scrollIntoView({
            behavior: 'smooth',
        });

        setActiveId(Number(id))
        
        setOrderList([
            ...orderList,
            {
                id: id,
                product: textContent,
                price: Number(value),
            },
        ]);
    }

    return (
        <div className='order-page'>
            <div className='order-page__order-block'>
                <OrderChoiceProducts products={products} onChange={(e) => {
                    if (e.target.checked) handleCheckProduct(e.target.id, e.currentTarget.textContent, e.target.value);
                    
                    else setOrderList(orderList.filter((item) => item.id !== e.target.id));
                }} />
                <OrderPrice orderList={orderList} />
            </div>
            <OrderProductsList products={products} activeId={activeId} />
        </div>
    )
}