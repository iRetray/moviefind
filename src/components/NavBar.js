import React from 'react'
import logo from '../images/titulo.png'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-nav bg-light justify-content-center">
                    <Link>
                        <img src={logo} alt="" style={{ maxHeight: '60px' }} />
                    </Link>
                </nav>
            </div>
        )
    }
}