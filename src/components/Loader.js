import React from 'react'

export default function Loader() {
    return (
        <div class="d-flex justify-content-center align-items-center" style={{ width : '100%', height : '100%'}}>
            <div class="spinner-grow text-center text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
