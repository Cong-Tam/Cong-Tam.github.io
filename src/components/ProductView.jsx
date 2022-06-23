import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/shopping-cart/cartItemsSlide'
import numberWithCommas from '../utils/numberWithCommas'


const ProductView = props => {

    const dispatch = useDispatch()

    const product = props.product
    const [previewImg, setPreviewImg] = useState(product.images[0])
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        }
        else setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }

    useEffect(() => {
        setPreviewImg(product.images[0])
    }, [product])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    const addToCart = () => {
        dispatch(addItem({
            slug: product.slug,
            quantity: quantity,
            price: product.price
        }))
        props.setActiveMessage(true)
        window.scrollTo(0, 0)
    }

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    {
                        product.images.map((item, index) => (
                            <div className="product__images__list__item" key={index} onClick={() => setPreviewImg(item)}>
                                <img src={item} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__name">{product.title}</h1>
                <div className="product-price">
                    <span>{numberWithCommas(product.price)}<u> đ</u></span>
                </div>
                <ul className="product__info__description">
                    <li>{product.description1}</li>
                    <li>{product.description2}</li>
                    <li>{product.description3}</li>
                </ul>
                <div className='product__info__btns'>
                    <div className='product__info__btns__item product__info__btns__quantity'>
                        <div className='product__info__btns__quantity__item' onClick={() => updateQuantity('minus')}>
                            <i className="fas fa-minus"></i>
                        </div>
                        <div className='product__info__quantity'>{quantity}</div>
                        <div className='product__info__btns__quantity__item' onClick={() => updateQuantity('plus')}>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    <div className='product__info__btns__item btn'
                        onClick={() => addToCart()}
                    >Add to cart</div>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired,
    setActiveMessage: PropTypes.func
}

export default ProductView