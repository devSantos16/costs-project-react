import { Link } from 'react-router-dom'

const Projects = ({ array, setArray }) => {

    
    const showCard = (elementArray, index) => {

        const deleteCard = (elementArray) => {
            // I need to study this
            setArray(current => current.filter(obj => {
                return obj !== elementArray;
            }))
            
        }

        return (
            <div className="cardProject" key={index}>
                <h1 className="titleCard">{elementArray}</h1>
                <button onClick={() => deleteCard(elementArray)}> <Link to= "/projects"> Deletar </Link>  </button>
            </div>)

    }
    return (
        <div className="cardContainer">
            {array.map((elementArray, index) => showCard(elementArray, index))}
        </div>

    )

}

export default Projects;