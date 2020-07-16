import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert } from 'reactstrap'
import logoBlanco from '../images/tituloBlanco.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faNewspaper, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Carrousell from '../components/Carrousell'

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={{ maxWidth: '90%' }}>
                    <div className="row justify-content-md-center" style={{ marginTop: '30px' }}>
                        <div className="col-xl-8" style={{ padding: '15px' }}>
                            <Carrousell className="container-fluid" />
                        </div>
                        <div className="col-xl-4" style={{ padding: '15px' }}>
                            <img src={logoBlanco} alt="" className="img-fluid" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                            <hr style={{ borderColor: 'white' }}></hr>
                            <center>
                                <h3 className="text-white">Una herramienta para buscar y filtrar películas, series y programas de televisión.</h3>
                                <br></br>
                                <Alert color="secondary">
                                    <h4>Realiza busquedas por actor, género, título, año de producción o calificación.</h4>
                                    <hr></hr>
                                    <h6 className="text-muted">Potenciado con la <strong><i>API REST</i></strong> pública que proporciona <strong><i>TMDB.</i></strong></h6>
                                </Alert>
                            </center>
                            <div className="row">
                                <div className="col-sm-6" style={{ marginTop: '5px' }}>
                                    <Button color="warning" size="sm" href="https://www.themoviedb.org/documentation/api?language=es" block>
                                        <FontAwesomeIcon icon={faCode} /> Documentación de <strong>API REST</strong>
                                    </Button>
                                </div>
                                <div className="col-sm-6" style={{ marginTop: '5px' }}>
                                    <Button color="warning" size="sm" block href="https://www.themoviedb.org/?language=es">
                                        <FontAwesomeIcon icon={faNewspaper} /> Página web de <strong>TMDB</strong>
                                    </Button>
                                </div>
                            </div>
                            <br></br>
                            <Link to="/search" style={{ textDecoration: 'none' }}>
                                <Button color="danger" size="lg" block><FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> <strong>Buscar películas</strong></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}