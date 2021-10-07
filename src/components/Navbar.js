import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    navItems = ['Home', 'About', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology']

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nbr" aria-controls="nbr" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="nbr">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {this.navItems.map((ele) => {
                                    return (<li key={ele} className="nav-item"><Link className="nav-link" to={'/' + ele.toLowerCase()}>{ele}</Link></li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
