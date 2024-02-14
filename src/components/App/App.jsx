import { Header } from '/src/components/layout/Header/Header';
import { MainPage } from '/src/components/pages/MainPage/MainPage';
import { Footer } from '/src/components/layout/Footer/Footer';
import './App.css';

export const App = () => {
    return (
        <>
            <Header />
            <main>
                <MainPage />
            </main>
            <Footer />
        </>
    )
}