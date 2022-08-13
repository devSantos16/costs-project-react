import { Link } from 'react-router-dom'

const Projects = ({ array, setArray }) => {


    const showCard = (elementArray, index) => {
        const { title, budget, category } = elementArray;

        const deleteCard = (elementArray) => {
            // I need to study this
            setArray(current => current.filter(obj => {
                console.log(obj.title);
                return obj.title !== elementArray;
            }))

        }

        return (
            <div className="cardProject" key={index}>
                <div className='cardContent'>
                    <h1 className="titleCard">{title}</h1>
                    <p>Orçamento: {budget} R$</p>
                    <p>Tipo: {category}</p>
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