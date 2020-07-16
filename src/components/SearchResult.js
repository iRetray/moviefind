import React from 'react'
import Axios from 'axios'
import Movie from './Movie'
import { Alert } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default class SearchResult extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
        this.peticionAPI = this.peticionAPI.bind(this)
    }

    componentDidUpdate() {
        this.peticionAPI()
    }

    async peticionAPI() {
        const query = this.props.search
        const pageQuery = "&page=" + this.props.page
        const queryBase = "https://api.themoviedb.org/3/search/movie?api_key=32f3a04caefdfe3f72de841ee31a3954&language=es&query="
        const completeQuery = queryBase.concat(query, pageQuery)
        const peticion = await Axios.get(completeQuery)
        this.setState({
            results: peticion.data.results
        })
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.results.map(e =>
                        e.poster_path !== null ?
                            <div className="col-sm-6 col-md-4 col-md-4 col-lg-3 col-xl-2 align-self-center" style={{ padding: '10px' }} key={e.id}>
                                <center>
                                    <Movie
                                        title={e.title}
                                        isPosterNull={e.poster_path}
                                        poster={"https://image.tmdb.org/t/p/w500" + e.poster_path}
                                        calificacion={e.vote_average}
                                        id={e.id}
                                    />
                                </center>
                            </div>
                            : <div key={e.id}></div>
                    )
                }
                {
                    this.state.results.length === 0 && this.props.search !== "" ?
                        <div className="mx-auto">
                            <Alert color="danger">
                                <FontAwesomeIcon icon={faExclamationTriangle} />{'   '}
                                 No se han encontrado resultados para <strong>{this.props.search}</strong>, intenta usar <i>menos palabras</i> o <i>usar otros terminos de busqueda.</i>
                            </Alert>
                        </div>
                        : <div></div>
                }
            </div>
        )
    }
}