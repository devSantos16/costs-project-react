import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NewProject from '../pages/NewProject';
import Projects from '../pages/Projects';
import NavBar from '../patterns/Navbar';

const Router = () => {
    const categorys = ['Planejamento', 'Segurança', 'Desenvolvimento', 'Design'];
    const [nameProject, setNameProject] = useState();
    const [budget, setBudget] = useState();
    const [category, setCategory] = useState(categorys[0]);
    const [array, setArray] = useState([]);
    

    const set = {
        setNameProject,
        setBudget,
        setCategory,
        setArray
    }


    const get = {
        nameProject,
        budget,
        category,
        array
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exath path='/' element={<Home />} />
                <Route path='/newproject' element={<NewProject set = {set} get = {get} categorys = {categorys} />} />
                <Route path='/projects' element={<Projects  set = {set} get = {get} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;