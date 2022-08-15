import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <section className="sectionContainer">
            <div className="elementContainer">
                <h1> Seja bem vindo a Costs </h1>
                <p>Comece a gerenciar os seus projetos</p>
                <div className='buttonHomeContainer'>
                    <Link className='button' to="/newproject">Criar projeto</Link>
                </div>

            </div>
        </section>
    )
}

export default Home;