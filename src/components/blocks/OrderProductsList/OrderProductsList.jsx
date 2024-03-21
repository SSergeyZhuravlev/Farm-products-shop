import { OrderProductCard } from '../../ui/OrderProductCard/OrderProductCard';
import { OptionsList } from '../../ui/OptionsList/OptionsList';
import './OrderProductsList.css';
import { useRef } from 'react';

export let getNodesList;

export const OrderProductsList = ( { products, activeId } ) => {
    const itemsRef = useRef(null);
    function getMap() {
        if (!itemsRef.current) {
          itemsRef.current = new Map();
        }
        return itemsRef.current;
      }

    return (
        <section className='order-products'>
            <ul className='order-products__list'>
                {
                    products.map((product) => {
                        const tabsContentList = [
                            {
                              title: "Oписание",
                              content: product.description
                            },
                            {
                              title: "Характеристики",
                              content: <OptionsList content={product.specifications} />
                            },
                            {
                              title: "Свойства",
                              content: <OptionsList content={product.structure} />
                            }
                        ];

                        return (
                            <li className={activeId === product.id ? 'order-products__list__item scrolled' : 'order-products__list__item'} key={product.id} ref={(node) => {
                                getNodesList = getMap()
                                if (node) {
                                    getNodesList.set(product.id, node)
                                } else getNodesList.delete(product.id)
                            }}>
                                <OrderProductCard imageSrc={product.image} title={product.name} tabsContentList={tabsContentList} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}