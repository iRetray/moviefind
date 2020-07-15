import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Form } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilm } from '@fortawesome/free-solid-svg-icons'

export default class Searcher extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)        
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()        
        this.props.setSearch(this.state.search)
    }

    handleChange(e){
        this.setState({
            search: e.target.value
        })
        this.props.setSearch(e.target.value)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><FontAwesomeIcon icon={faFilm} /></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nombre de película o serie para buscar" value={this.state.search} onChange={this.handleChange} name="search" type="text"/>
                    <InputGroupAddon addonType="append">
                        <Button type="submit" color="danger"><FontAwesomeIcon icon={faSearch} /> Buscar</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        )
    }
}