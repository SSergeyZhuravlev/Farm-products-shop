import { Title } from '/src/components/ui/Title/Title';
import './About.css';

export const About = () => {
    return (
        <section className='about'>
            <div className='about__descr'>
                <Title className='about__title' priority='1'>Магазин фермерских продуктов с доставкой</Title>
                <p className='about__descr__text'>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</p>
            </div>
        </section>
    )
}