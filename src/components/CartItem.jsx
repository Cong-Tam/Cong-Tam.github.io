import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import numberWithCommas from '../utils/numberWithCommas'
import { useDispatch } from 'react-redux'
import { updateItem, removeItem } from '../redux/shopping-cart/cartItemsSlide'
import { Link } from 'react-router-dom'

const CartItem = props => {

    const dispatch = useDispatch()

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (option) => {
        if (option === "+") {
            // setQuantity(quantity + 1)
            dispatch(updateItem({ ...item, quantity: quantity + 1 }))
        }
        if (option === "-") {
            // setQuantity(quantity - 1 <= 0 ? 1 : quantity - 1)
            dispatch(updateItem({ ...item, quantity: quantity - 1 <= 0 ? 1 : quantity - 1 }))
        }
    }

    const removeCartItem = () => {
        dispatch(removeItem(item))
    }

    return (
        <tr>
            <td className='cart-product__btn-close' onClick={() => removeCartItem()}>
                <i className="fas fa-times"></i>
            </td>
            <td className='cart-product__thumbnail'>
                <Link to={`/san-pham/${item.product.slug}`}>
                    <img src={item.product.images[0]} alt="" />
                </Link>
            </td>
            <td className='cart-product__name'>
                <Link to={`/san-pham/${item.product.slug}`}>
                    {item.product.title}
                </Link>
            </td>
            <td className='product-price cart-product__price'>{numberWithCommas(Number(item.product.price))}<u> đ</u></td>
            <td className='cart-product__quantity'>
                <div className='product__info__btns__item product__info__btns__quantity'>
                    <div className='product__info__btns__quantity__item' onClick={() => updateQuantity("-")}>
                        <i className="fas fa-minus"></i>
                    </div>
                    <div className='product__info__quantity'>{quantity}</div>
                    <div className='product__info__btns__quantity__item' onClick={() => updateQuantity("+")}>
                        <i className="fas fa-plus"></i>
                    </div>
                </div>
            </td>
            <td className='cart-product__subtotal product-price'>{numberWithCommas(Number(item.product.price))}<u> đ</u></td>
        </tr>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem