import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Navbar extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        let navItems = ['Home','About', 'Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {navItems.map((ele)=>{
                                    return (<li className="nav-item"><a className="nav-link" href="/">{ele}</a></li>)
                                })}
                               
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
