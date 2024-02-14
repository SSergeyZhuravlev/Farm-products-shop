import { profits } from '/src/mocks/profits';
import { About } from '/src/components/blocks/About/About';
import { FarmProfitList } from '/src/components/blocks/FarmProfitList/FarmProfitList';

export const MainPage = () => {
    return (
        <>
            <About />
            <FarmProfitList list={profits} />
        </>
    )
}