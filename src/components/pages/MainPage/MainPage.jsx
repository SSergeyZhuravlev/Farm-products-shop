import { profits } from '../../../mocks/profits';
import { About } from '../../blocks/About/About';
import { FarmProfitList } from '../../blocks/FarmProfitList/FarmProfitList';

export const MainPage = () => {
    return (
        <>
            <About />
            <FarmProfitList list={profits} />
        </>
    )
}