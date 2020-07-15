import React from 'react'
import Searcher from '../components/Searcher'
import SearchResult from '../components/SearchResult'
import PaginationSection from '../components/PaginationSection'
import { Badge } from 'reactstrap'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            query: "",
            pageQuery: 1,
            totalPages: ""
        }
        this.getSearch = this.getSearch.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.prevPage = this.prevPage.bind(this)
    }

    getSearch(query) {
        this.setState({
            query
        })
    }

    nextPage(){
        const newPage = this.state.pageQuery+1
        this.setState({
            pageQuery: newPage 
        })
    }

    prevPage(){
        const newPage = this.state.pageQuery-1
        this.setState({
            pageQuery: newPage 
        })
    }

    render() {
        return (
            <div className="container-fluid">                
                <div className="container">
                    <Searcher setSearch={this.getSearch} />
                    <p className="text-muted"><i> Has buscado:</i> <Badge>{this.state.query}</Badge></p>
                </div>
                <div className="container">
                    <PaginationSection  next={this.nextPage} prev={this.prevPage}/>
                </div>
                <div className="container-fluid">
                    <SearchResult search={this.state.query} page={this.state.pageQuery}/>
                </div>                
            </div>
        )
    }
}