import React from 'react'

export default function Loader() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ width : '100%', height : '100%'}}>
            <div className="spinner-grow text-center text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
