import { Link } from 'react-router-dom'

const NewProject = ({ set, get, categorys }) => {

    const { setNameProject, setBudget, setCategory, setArray } = set;
    const { nameProject, budget, category } = get;


    const eventHandle = (set, event) => {
        event.preventDefault();
        set(event.target.value);
        console.log(event.target.value);
    }

    const showCategorys = (category, index) => {
        return (
            <option key={index} value={category}>{category}</option>
        )
    }

    const submitProject = () => {
        console.log(category)

        // I need to study this
        setArray(prevArray => [...prevArray,
        {
            title: nameProject,
            budget: budget,
            category: category,
            services: []
        }
        ]);

        setNameProject("");
        setBudget(0);
        setCategory(categorys[0]);

    }

    return (
        <section className="sectionContainer">
            <h1>Criar Projeto</h1>
            <p>Crie seus projetos para depois adicionar os serviços</p>
            <form className='formContainer'>
                <p>Nome do Projeto</p>
                <input type='text' onChange={(e) => eventHandle(setNameProject, e)}></input>
                <p>Orçamento</p>
                <input type='text' onChange={(e) => eventHandle(setBudget, e)} ></input>
                {/* nao sei ainda */}
                <p>Categoria</p>
                <select onChange={(e) => eventHandle(setCategory, e)}>
                    {categorys.map((category, index) => showCategorys(category, index))}
                </select>
            </form>
            <div className="buttonContainer">
                <Link className="button" onClick={() => submitProject()} to="/projects">Criar projeto</Link>
            </div>
        </section>

    )
}

export default NewProject;