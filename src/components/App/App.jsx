import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout';
import { MainPage } from '/src/components/pages/MainPage/MainPage';
import { OrderPage } from '/src/components/pages/OrderPage/OrderPage';
import { ScrollToTop } from '../ui/ScrollToTop';
import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path='order-page' element={<OrderPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}