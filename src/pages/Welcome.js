import React from 'react'
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
                        <div className="col-md-8" style={{ padding: '15px' }}>
                            <Carrousell className="container-fluid" />
                        </div>
                        <div className="col-md-4" style={{ padding: '15px' }}>
                            <img src={logoBlanco} alt="" className="img-fluid" />
                            <hr style={{ borderColor: 'white' }}></hr>
                            <center>
                                <h3 className="text-white">Una herramienta para buscar y filtrar películas y series.</h3>
                                <br></br>
                                <Alert color="secondary">
                                    <h5>Realiza busquedas por actor, género, título, año de producción o calificación, todo gracias a la <strong><i>API REST</i></strong> pública que proporciona <strong><i>TMDB.</i></strong></h5>
                                </Alert>
                            </center>
                            <div className="row">
                                <div className="col-sm-6" style={{ marginTop: '5px' }}>
                                    <Button color="warning" size="sm" href="https://www.themoviedb.org/documentation/api?language=es" block>
                                        <FontAwesomeIcon icon={faCode} /> Documentación de <strong>API REST</strong>
                                    </Button>
                                </div>
                                <div className="col-sm-6" style={{ marginTop: '5px' }}>
                                    <Button color="warning" size="sm" block>
                                        <FontAwesomeIcon icon={faNewspaper} /> Página web de <strong>TMDB</strong>
                                    </Button>
                                </div>
                            </div>
                            <br></br>
                            <Button color="danger" size="lg" block><FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> <strong>Buscar películas</strong></Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}