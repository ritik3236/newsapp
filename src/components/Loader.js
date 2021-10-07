import React from 'react'

export default function Loader() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ width : '100%', height : '100%'}}>
            <div className="spinner-border text-center text-secondary my-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
