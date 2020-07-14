import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
import movies from '../images/movies.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="row justify-content-md-center container-fluid">
                    <img src={movies} alt="" className="img-fluid" style={{ maxHeight: '500px' }} />
                </div>
                <div class="position-sticky">
                <div className="row justify-content-md-center container-fluid">
                    <center>
                    <p className="lead text-light">"El cine es, además de un espectáculo de masas, la imagen en movimiento de la historia de la humanidad"</p>
                    <Button color="danger" size="lg"><FontAwesomeIcon icon={ faFilm }/> ¡Buscar películas!</Button>
                    </center>
                </div>
                </div>
            </div>
        )
    }
}