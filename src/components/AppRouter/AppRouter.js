import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Login, Contact, Products } from '../../screens/index'
import { NotFoundPage } from '../../screens/NotFoundPage/NotFoundPage'
import { ContainerItemDetail } from "../ContainerItemDetail/ContainerItemDetail";

const AppRouter = (() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/products/:id' element={<ContainerItemDetail/>} />
                <Route path='/products/:caregory' element={<Home />} />
                <Route path='/' element={ <Home />} />
                <Route path='/products' element={ <Products /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
});

export { AppRouter }