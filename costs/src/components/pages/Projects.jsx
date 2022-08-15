import { Link } from 'react-router-dom'

const Projects = ({ get, set }) => {

    const { array } = get;
    const { setArray } = set;

    const showCard = (elementArray, index) => {
        const { title, budget, category } = elementArray;

        const deleteCard = (elementArray) => {
            // I need to study this
            setArray(current => current.filter(obj => {
                const { title } = obj;
                console.log(title);
                return title !== elementArray;
            }))

        }

        return (
            <div className="cardProject" key={index}>
                <div className='cardContent'>
                    <h1 className="titleCard">{category}</h1>
                    <p>Titulo: {title}</p>
                    <p>Orçamento: {budget} R$</p>
                    <button onClick={() => deleteCard(title)}>Deletar</button>


                </div>

            </div>)

    }
    return (
        <div className="cardContainer">
            {array.map((elementArray, index) => showCard(elementArray, index))}
        </div>

    )

}

export default Projects;