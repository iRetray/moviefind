import React from 'react'
import Axios from 'axios'
import { Jumbotron, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'

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
                        <div style={{marginTop: '10px'}}>
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
                        </Jumbotron>
                        <img src={"https://image.tmdb.org/t/p/original" + this.state.dataMovie.backdrop_path} alt="" className="img-fluid" />
                    </div>
                </div>
            </center>
        )
    }
}