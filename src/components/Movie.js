import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to={"/details/"+this.props.id} style={{textDecoration: 'none', color: 'black'}}>
                <div className="card" style={{ border: 'none', cursor: 'pointer' }}>
                    <img className="card-img-top img-fluid" src={this.props.poster} alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{textDecoration: 'none'}}>{this.props.title}</h5>
                        <Rating name="read-only" size="small" value={this.props.calificacion / 2} readOnly precision={0.1} />
                        <p className="card-text">
                            {
                                this.state.genresMovie.map(e =>
                                    <Badge style={{ marginRight: '3px' }} key={e.name}>{e.name}</Badge>
                                )
                            }
                        </p>
                    </div>
                </div>
            </Link>
        )
    }
}