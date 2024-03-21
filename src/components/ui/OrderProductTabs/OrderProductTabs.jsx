import { useState } from 'react';
import { BuyButton } from '../BuyButton/BuyButton';
import './OrderProductTabs.css';

export const OrderProductTabs = ( { tabsContentList } ) => {
    const [activeTab, setActiceTab] = useState(0);

    return (
        <div>
            <ul className='order-page__order-product-card__tabs-list'>
                {
                    tabsContentList.map((contentItem, index) => {
                        return (
                            <li className='order-page__order-product-card__tab' key={index * 101}>
                                <BuyButton className={index === activeTab ? 'order-page__order-product-card__tab__btn active' : 'order-page__order-product-card__tab__btn'} onClick={() => {
                                    index !== activeTab && setActiceTab(index)
                                }}>{contentItem.title}</BuyButton>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                {
                    tabsContentList[activeTab].content
                }
            </div>
        </div>
    )
}