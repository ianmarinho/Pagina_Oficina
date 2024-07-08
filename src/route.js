import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Página Principal ou Primeira Página
import HomePage from './pages/HomePage';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                // Rota Página Principal ou Primeira Página
                <Route path="/" exact element={<HomePage />} />

            </Routes>

        </BrowserRouter>

    )
}