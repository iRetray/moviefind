import React from 'react'
import { Badge } from 'reactstrap'
import Rating from '@material-ui/lab/Rating';
import Axios from 'axios'

export default class Movie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            genresMovie: []
        }
    }

    componentDidUpdate() {
        this.getDataOfMovie(this.props.id)
    }

    async getDataOfMovie(id) {
        const completeQuery = "https://api.themoviedb.org/3/movie/" + id + "?api_key=32f3a04caefdfe3f72de841ee31a3954&language=es"
        const peticion = await Axios.get(completeQuery)
        this.setState({
            genresMovie: peticion.data.genres
        })
    }

    render() {

        return (
            <div className="card" style={{border: 'none'}}>
                <img className="card-img-top" src={this.props.poster} alt="" className="img-fluid" />
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <Rating name="read-only" size="small" value={this.props.calificacion / 2} readOnly precision={0.1} />
                    <p class="card-text">
                        {
                            this.state.genresMovie.map(e =>
                                <Badge style={{marginRight: '3px'}}>{e.name}</Badge>
                            )
                        }
                    </p>
                </div>
            </div>
        )
    }
}