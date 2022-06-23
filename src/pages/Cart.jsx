import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Helmet from '../components/Helmet'
import productData from '../assets/fake-data/product';
import numberWithCommas from '../utils/numberWithCommas'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)
    const [cartProducts, setCartProducts] = useState(productData.getCartItemsDetail(cartItems))
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsDetail(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [cartItems])



    return (
        <Helmet title='Giỏ hàng'>
            <div className='cart'>
                {
                    cartProducts.length <= 0 ?
                        <div className='cart__empty'>
                            <h1 className='cart__empty__title'>Không có sản phẩm nào trong giỏ hàng</h1>
                            <Link to="/danh-sach-san-pham">
                                <div className='cart__empty__btn'>Đi đến mua hàng</div>
                            </Link>
                        </div> :
                        <div className="cart__wrapper">
                            <table className='cart__wrapper__form'>
                                <tbody>
                                    <tr>
                                        <th ></th>
                                        <th ></th>
                                        <th >PRODUCT</th>
                                        <th >PRICE</th>
                                        <th >QUANTITY</th>
                                        <th >SUBTOTAL</th>
                                    </tr>
                                    {
                                        cartProducts.map((item, index) => (
                                            <CartItem item={item} key={index} />
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div className="cart__wrapper__total">
                                <h2>CART TOTALS</h2>
                                <div className="cart__wrapper__total__item">
                                    <div>Tạm tính</div>
                                    <div className='product-price'>{numberWithCommas(totalPrice)} <u>đ</u> </div>
                                </div>
                                <div className="cart__wrapper__total__item">
                                    <div>Tổng tiền</div>
                                    <div className='product-price'>{numberWithCommas(totalPrice)} <u>đ</u></div>
                                </div>
                                <div className="cart__wrapper__total__btn btn">Thanh toán</div>
                            </div>
                        </div>
                }

            </div>
        </Helmet>
    )
}

export default Cart