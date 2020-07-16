import React from 'react'

export default class Details extends React.Component {
    render() {
        return(
            <div>
                <p className="text-white">
                Detalles de la pelicula {this.props.match.params.id}
                </p>
                {console.log(this.props.match.params.id)}
            </div>
        )
    }
}