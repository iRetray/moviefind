import React from 'react'
import { Badge } from 'reactstrap'
import Rating from '@material-ui/lab/Rating';
import Axios from 'axios'

export default class Movie extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dataMovie: []
        }
    }

    componentDidUpdate(){
        this.getDataOfMovie(this.props.id)
    }

    async getDataOfMovie(id){
        console.log(id)
        const completeQuery = "https://api.themoviedb.org/3/movie/"+id+"?api_key=32f3a04caefdfe3f72de841ee31a3954&language=es"
        console.log(completeQuery)
        const peticion = await Axios.get(completeQuery)
        this.setState({
            dataMovie: peticion
        })
        console.log(this.state.dataMovie)
    }

    render() {
        return (
            <div className="row align-items-center">
                <div className="col-sm-8 align-self-center">
                    <img src={this.props.poster} alt="" style={{ maxWidth: '200px' }} />
                </div>
                <div className="col-sm-4 align-self-center">
                    <h6 className="text-white"><strong>{this.props.title}</strong></h6>
                    {
                        this.state.dataMovie.genres.map(e =>
                            <Badge>e.name</Badge>
                        )
                    }
                    <Badge></Badge>                   
                    <Rating name="read-only" size="small" value={this.props.calificacion/2} readOnly precision={0.1} />
                </div>
            </div>
        )
    }
}