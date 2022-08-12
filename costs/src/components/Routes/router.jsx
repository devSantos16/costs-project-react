import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NewProject from '../pages/NewProject';
import Projects from '../pages/Projects';
import NavBar from '../patterns/Navbar';

const Router = () => {
    const [project, setProject] = useState();
    const [budget, setBudget] = useState();
    const [category, setCategory] = useState();

    const [array, setArray] = useState([]);

    const set = {
        setProject,
        setBudget,
        setCategory,
    }


    const get = {
        project,
        budget,
        category,
    }

    

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exath path='/' element={<Home />} />
                <Route path='/newproject' element={<NewProject setArray = {setArray} set = {set} get={get} />} />
                <Route path='/projects' element={<Projects setArray = {setArray} array = {array} get = {get} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;