import React from 'react'
import { Pagination, PaginationItem, PaginationLink, Button, Alert, Badge, ButtonGroup } from 'reactstrap'

export default class PaginationSection extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <ButtonGroup>
                        <Button size="sm" color="danger" onClick={this.props.prev}>{'<'}</Button>
                        <Button size="sm" color="danger" disabled><strong>Pagina x de x</strong></Button>
                        <Button size="sm" color="danger" onClick={this.props.next}>{'>'}</Button>
                    </ButtonGroup>
                </center>
            </div>
        )
    }
}