import { Link } from 'react-router-dom'

const NewProject = ({ set, get, setArray, categorys }) => {


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
        console.log(get.category)

        // I need to study this
        setArray(prevArray => [...prevArray,
        {
            title: get.nameProject,
            budget: get.budget,
            category: get.category,
            services: []
        }
        ]);

        set.setNameProject("");
        set.setBudget(0);
        set.setCategory("");

    }

    return (
        <section className="sectionContainer">
            <h1>Criar Projeto</h1>
            <p>Crie seus projetos para depois adicionar os serviços</p>
            <form>
                <p>Nome do Projeto</p>
                <input type='text' onChange={(e) => eventHandle(set.setNameProject, e)}></input>
                <p>Orçamento</p>
                <input type='text' onChange={(e) => eventHandle(set.setBudget, e)} ></input>
                {/* nao sei ainda */}
                <p>Categoria</p>
                <select onChange={(e) => eventHandle(set.setCategory, e)}>
                    {categorys.map((category, index) => showCategorys(category, index))}
                </select>
            </form>
            <div className="buttonContainer">
                <button><Link onClick={() => submitProject()} to="/projects">Criar projeto</Link></button>
            </div>
        </section>

    )
}

export default NewProject;