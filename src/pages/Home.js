import React from 'react'
import Searcher from '../components/Searcher'
import SearchResult from '../components/SearchResult'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            query: "",
            results: []
        }
        this.getSearch = this.getSearch.bind(this)
    }

    getSearch(query) {
        this.setState({
            query
        })  
    }

    render() {
        return (
            <div className="container">
                <Searcher setSearch={this.getSearch} />
                <h5 className="text-white">Has buscado: {this.state.query}</h5>
                <SearchResult search={this.state.query} setResult={this.getResults}/>
            </div>
        )
    }
}