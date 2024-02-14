import { Title } from '/src/components/ui/Title/Title';
import './FarmProfitCard.css';

export const FarmProfitCard = ( { productsType, prop, propDescr, src } ) => {
    return (
        <article className={productsType === 'farm' ? 'farm-profit__card farm-profit__card--good': 'farm-profit__card farm-profit__card--bad'}>
            <div className='farm-profit__card__wrapper'>
                <img className='farm-profit__card__image' src={src} alt="Изображение свойста продукта" />
                <div className='farm-profit__card__title__wrapper'>
                    <span className='farm-profit__card__type'>
                        {productsType === 'farm' ? 'Фермерские продукты' : 'Магазинные продукты'}
                    </span>
                    <Title className='farm-profit__card__title' priority='3'>{prop}</Title>
                </div>
            </div>
            <p className='farm-profit__card__descr'>{propDescr}</p>
        </article>
    )
}