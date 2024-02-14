import { Header } from '../layout/Header/Header';
import { MainPage } from '../pages/MainPage/MainPage';
import { Footer } from '../layout/Footer/Footer';
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