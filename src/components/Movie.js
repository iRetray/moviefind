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
            <div className="row">
                <div className="col-6" style={{ minWidth: '190px' }}>
                    <img src={this.props.poster} alt="" className="img-fluid"/>
                </div>
                <div className="col-6" style={{ padding: '10px', backgroundColor: '#2B2E32', minWidth: '150px' }}>
                    <center>
                    <h6 className="text-white"><strong>{this.props.title}</strong></h6>
                    <Rating name="read-only" size="small" value={this.props.calificacion / 2} readOnly precision={0.1} />
                    </center>
                    <br />
                    {
                        this.state.genresMovie.map(e =>
                            <Badge color="primary" style={{marginRight: '1px'}} key={e.name}> {e.name}</Badge>
                        )
                    }                    
                </div>
            </div>
        )
    }
}