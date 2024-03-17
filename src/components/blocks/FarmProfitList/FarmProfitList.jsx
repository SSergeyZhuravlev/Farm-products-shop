import { BuyButton } from '/src/components/ui/BuyButton/BuyButton';
import { FarmProfitCard } from '/src/components/ui/FarmProfitCard/FarmProfitCard';
import { Title } from '/src/components/ui/Title/Title';
import './FarmProfitList.css';

export const FarmProfitList = ( { list } ) => {
    return (
        <section className='farm-profit'>
            <Title className='farm-profit__title' priority='2'>Почему фермерские продукты лучше?</Title>
            <ul className='farm-profit__list'>
                {
                    list.map(( { id, productsType, prop, propDescr, src } ) => {
                        return <li className='farm-profit__list__item' key={id}>
                            <FarmProfitCard productsType={productsType} prop={prop} propDescr={propDescr} src={src} />
                        </li>
                    })
                }
            </ul>
            <BuyButton>Купить</BuyButton>
        </section>
    )
}