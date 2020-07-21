import React from 'react'
import Axios from 'axios'
import { Jumbotron, Button, Alert } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt, faPager } from '@fortawesome/free-solid-svg-icons'
import { faBuilding  } from '@fortawesome/free-regular-svg-icons'

export default class Details extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataMovie: []
        }
        this.getDetails = this.getDetails.bind(this)
    }

    componentWillMount() {
        this.getDetails()
    }

    async getDetails() {
        const idMovie = this.props.match.params.id
        const query = "https://api.themoviedb.org/3/movie/" + idMovie + "?api_key=32f3a04caefdfe3f72de841ee31a3954&language=es"
        const peticion = await Axios.get(query)
        this.setState({
            dataMovie: peticion.data
        })
        console.log(this.state.dataMovie)
    }

    render() {
        return (
            <center>
                <div className="container row justify-content-md-center">
                    <div className="col-lg-4">
                        <img src={"https://image.tmdb.org/t/p/original" + this.state.dataMovie.poster_path} alt="" className="img-fluid" />
                        <div style={{ marginTop: '10px' }}>
                            <a href={"https://www.netflix.com/search?q=" + this.state.dataMovie.title} style={{ textDecoration: 'none' }}>
                                <Button color="danger" block><FontAwesomeIcon icon={faTicketAlt} /> Buscar en Netflix</Button>
                            </a>
                        </div>

                    </div>
                    <div className="col-lg-8">
                        <Jumbotron>
                            <p>
                                <p className="display-4">{this.state.dataMovie.title}</p>
                                <h6 className="text-muted">{this.state.dataMovie.tagline}</h6>
                            </p>
                            <p align="justify">{this.state.dataMovie.overview}</p>
                            <hr />
                            {
                                this.state.dataMovie.homepage
                                    ? <Button color="link" href={this.state.dataMovie.homepage}><FontAwesomeIcon icon={faPager} /> Sitio web de {this.state.dataMovie.title}</Button>
                                    : <div></div>
                            }
                        </Jumbotron>
                        <Alert color="dark">
                            {
                                this.state.dataMovie.production_companies
                                    ? <div>
                                        <h5><FontAwesomeIcon icon={faBuilding}/>  Compañias de producción</h5>
                                        <hr />
                                        {
                                            this.state.dataMovie.production_companies.map(e =>
                                                <div className="container">
                                                    <img src={"https://image.tmdb.org/t/p/w500"+e.logo_path} alt="" className="img-fluid"/>
                                                </div>
                                            )
                                        }
                                    </div>
                                    : <div></div>
                            }
                        </Alert>
                        <img src={"https://image.tmdb.org/t/p/original" + this.state.dataMovie.backdrop_path} alt="" className="img-fluid" />
                    </div>
                </div>
            </center>
        )
    }
}