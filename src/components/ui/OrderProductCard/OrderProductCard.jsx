import { OrderProductTabs } from '../OrderProductTabs/OrderProductTabs';
import { Title, TITLE_SIZE } from '../Title/Title';
import './OrderProductCard.css';

export const OrderProductCard = ( { imageSrc, title, tabsContentList } ) => {
    return (
        <div className='order-page__order-product-card'>
            <img className='order-page__order-product-card__img' src={imageSrc} alt={title} style={{width: 248, height: 248}} />
            <div>
                <Title priority={2} className='order-page__order-product-card__title'>{title}</Title>
                <OrderProductTabs tabsContentList={tabsContentList} />
            </div>
        </div>
    )
}