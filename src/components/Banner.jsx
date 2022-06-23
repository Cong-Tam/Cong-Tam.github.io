import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Banner = props => {

    const data = props.data

    return (
        <Link to={data.path}>
            <div className='banner'>
                <div className="banner__img">
                    <img src={data.img} alt="" />
                </div>
                <div className='banner__content'>
                    <h3 className='banner__content__title'>{data.title}</h3>
                    <p>{data.link}</p>
                </div>
            </div>
        </Link>
    )
}

Banner.propTypes = {
    data: PropTypes.object.isRequired
}

export default Banner