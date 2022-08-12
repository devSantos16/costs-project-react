import { Link } from 'react-router-dom'

const NewProject = ({ set, get, setArray }) => {

    const showProject = (e) => {
        e.preventDefault();
        set.setProject(e.target.value);
    }

    const submitProject = () => {
        // I need to study this
        setArray(prevArray => [...prevArray, get.project])
        console.log(setArray)
    }

    return (
        <section className="sectionContainer">
            <h1>Criar Projeto</h1>
            <p>Crie seus projetos para depois adicionar os serviços</p>
            <form>
                <p>Nome do Projeto</p>
                <input type='text' onChange={(e) => showProject(e)}></input>
                <p>Orçamento</p>
                <input type='text'></input>
                <p>Categoria</p>
                <input type='text'></input>
            </form>
            <div className="buttonContainer">
                <button><Link onClick={() => submitProject()} to="/projects">Criar projeto</Link></button>
            </div>
        </section>

    )
}

export default NewProject;