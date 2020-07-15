import React from 'react'
import Axios from 'axios'

export default class SearchResult extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            results: []
        }
        this.peticionAPI = this.peticionAPI.bind(this)
        this.peticionAPIposter = this.peticionAPIposter.bind(this)
    }

    componentWillReceiveProps(){
        this.peticionAPI()
    }

    async peticionAPI(){
        const query = this.props.search
        const queryBase = "https://api.themoviedb.org/3/search/movie?api_key=32f3a04caefdfe3f72de841ee31a3954&language=es&query="
        const completeQuery = queryBase.concat(query)
        const peticion = await Axios.get(completeQuery)
        this.setState({
            results: peticion.data.results
        })
        console.log(this.state.results)
    }

    async peticionAPIposter(posterPath){
        const queryBase = "https://image.tmdb.org/t/p/original";
        const completeQuery = queryBase.concat(posterPath);
        console.log("La ruta de imagen es: ", completeQuery);
        return completeQuery;
    }

    render() {
        return(
            <div className="row">
                {
                    this.state.results.map( e =>
                        <div className="col-lg-4">
                            <p className="text-white">{e.title}</p>
                            <img src={"https://image.tmdb.org/t/p/w500"+e.poster_path} alt=""  style={{maxWidth: '300px'}}/>
                        </div>
                    )
                }
            </div>
        )
    }
}