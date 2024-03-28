import profitsEat from '/src/assets/images/profits-img-eat.png';
import profitsGarbage from '/src/assets/images/profits-img-eat.png';
import profitsSprout from '/src/assets/images/profits-img-eat.png';
import profitsNoMeat from '/src/assets/images/profits-img-eat.png';

export const profits = [
    {
        id: crypto.randomUUID(),
        productsType: 'farm',
        prop: 'Еда намного вкуснее',
        propDescr: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
        src: profitsEat,
    },
    {
        id: crypto.randomUUID(),
        productsType: 'store',
        prop: 'Просроченные продукты',
        propDescr: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
        src: profitsGarbage,
    },
    {
        id: crypto.randomUUID(),
        productsType: 'farm',
        prop: 'Натуральные продукты',
        propDescr: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
        src: profitsSprout,
    },
    {
        id: crypto.randomUUID(),
        productsType: 'store',
        prop: 'Некачественное мясо',
        propDescr: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
        src: profitsNoMeat,
    },
];