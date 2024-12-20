import React from 'react'
import Information from './information'
import "./page.css"

const page = () => {
    return (
        <>
            <div className="container">
                <h2 className="titulo">Fill in some information to create a profile</h2>
                <Information />
            </div>
        </>
    )
}

export default page