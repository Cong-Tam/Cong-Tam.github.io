import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import  numberWithCommas from '../utils/numberWithCommas'

const ProductCard = props => {
    return (
        <div className='product-card'>
            <Link to={`/san-pham/${props.slug}`}>
                <div className="product-card__img">
                    <img src={props.img01} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <span className="product-price">{`${numberWithCommas(props.price)}đ`}</span>
            </Link>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard