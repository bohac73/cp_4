import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import('./pages/Home/Home'))
const LazyPerfil = lazy(() => import('./pages/Perfil/Perfil'))
const LazyNovaLista = lazy(() => import('./pages/NovaLista/NovaLista'))

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<>Carregando</>}>
                <Routes>
                    <Route path="/" element={<LazyHome />} />
                    <Route path="/Perfil" element={<LazyPerfil />} />
                    <Route path="/NovaLista" element={<LazyNovaLista />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App;