import React from 'react'
import { Collapse, Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

export default class OptionsSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {   
        return (
            <div>
                <Button color="warning" size="sm" onClick={this.toggle} style={{ marginBottom: '1rem', marginTop: '1rem' }}><FontAwesomeIcon icon={faCogs} /> Configuración de busqueda</Button>
                <Collapse isOpen={this.state.isOpen}>
                    <Alert color="dark" style={{backgroundColor: '#F8F9FA'}}>
                        <h6>Configuraciones</h6>
                    </Alert>
                </Collapse>
            </div>
        )
    }
}