import React from 'react'
import Axios from 'axios'
import { Button, Toast, ToastHeader, ToastBody, Card, CardBody, CardImg, CardText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPager } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import NetflixIcon from '../images/netflix.svg'

export default class Details extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataMovie: [],
            date: ""
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
                        <hr />
                        <Toast color="warning">
                            {
                                this.state.dataMovie.production_companies
                                    ? <div>
                                        <ToastHeader><FontAwesomeIcon icon={faBuilding} />  Compañias de producción</ToastHeader>
                                        <ToastBody>
                                            {
                                                this.state.dataMovie.production_companies.map(e => 
                                                    e.logo_path !== null
                                                        ? <div className="container" style={{ padding: '15px' }}>
                                                            <img src={"https://image.tmdb.org/t/p/w500" + e.logo_path} alt="" className="img-fluid" />
                                                        </div>
                                                        : <div></div>
                                                )
                                            }
                                        </ToastBody>
                                    </div>
                                    : <div></div>
                            }
                        </Toast>
                    </div>
                    
                    <div className="col-lg-8">
                    <hr/>
                        <Card style={{ border: 'none' }}>
                            <CardImg top width="100%" src={"https://image.tmdb.org/t/p/original" + this.state.dataMovie.backdrop_path} alt="" />
                            <CardBody>
                                <CardText>
                                    <h3>
                                        <a href={"https://www.netflix.com/search?q=" + this.state.dataMovie.title} style={{ textDecoration: 'none' }}>
                                            <img src={NetflixIcon} alt="" className="img-fluid" style={{ maxWidth: '40px' }} />
                                        </a>{'  '}
                                        {this.state.dataMovie.title}
                                    </h3>
                                    <i>{this.state.dataMovie.tagline}</i>
                                    <hr />
                                    <p align="justify">{this.state.dataMovie.overview}</p>
                                    {
                                        this.state.dataMovie.homepage
                                            ? <div><hr /><Button color="link" href={this.state.dataMovie.homepage}><FontAwesomeIcon icon={faPager} /> Sitio web de {this.state.dataMovie.title}</Button></div>
                                            : <div></div>
                                    }
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </center>
        )
    }
}