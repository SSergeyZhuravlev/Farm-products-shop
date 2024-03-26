import { Outlet } from 'react-router-dom';
import { Header } from '/src/components/layout/Header/Header';
import { Footer } from '/src/components/layout/Footer/Footer';

export const AppLayout =() => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}