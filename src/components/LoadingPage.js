import React from 'react'
import loader from '../strapi-assets/assets/loader'
const LoadingPage = () => {
    return (
        <div className="loader">
            <div className="loader-div">
                <img id="loader-img" src={loader} alt="" />
            </div>
        </div>
    )
}

export default LoadingPage
