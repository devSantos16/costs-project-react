import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

const Router = () => {

    // Apenas teste
    const pessoa = {
        Nome: 'Emanuel',
        sobrenome: 'Dos Santos Paz'
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route exath path='/'element = {<Home/>}/>
                <Route exath path='/projects' element = {<Projects/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;