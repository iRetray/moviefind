import React from 'react'
import Searcher from '../components/Searcher'
import SearchResult from '../components/SearchResult'
import { Badge } from 'reactstrap'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            query: ""
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
            <div className="container-fluid">
                <div className="container">
                    <Searcher setSearch={this.getSearch} />
                    <p className="text-muted"><i> Has buscado:</i> <Badge>{this.state.query}</Badge></p>
                </div>
                <div className="container-fluid" style={{ maxWidth: '90%' }}>
                    <SearchResult search={this.state.query} />
                </div>
            </div>
        )
    }
}