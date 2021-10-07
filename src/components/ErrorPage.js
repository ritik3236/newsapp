import React, { Component } from 'react'

export default class ErrorPage extends Component {

    render() {
        return (
            <div className='text-center'>
                {this.props.errorData}
            </div>
        )
    }
}
