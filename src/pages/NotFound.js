import React from 'react'
import e404 from '../images/notFound.png'

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                        <img src={e404} alt="" className="img-fluid mx-auto d-block " style={{padding: '30px', maxWidth: '70%'}} />
                </div>
            </div>
        )
    }
}