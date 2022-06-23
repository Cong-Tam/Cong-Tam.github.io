import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import productData from '../assets/fake-data/product'
import Helmet from '../components/Helmet'
import HeroBanner from '../components/HeroBanner'
import ProductView from '../components/ProductView'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

const Product = () => {
    const {slug} = useParams()
    const product = productData.getProductBySlug(slug)
    const relatedProducts = productData.getProducts(4, product.categorySlug)
    const messageRef = useRef()
    const [activeMessage, setActiveMessage] = useState(false)

    useEffect(() => {
        setActiveMessage(false)
    }, [slug, product])

    return (
        <Helmet title={`${product.title}`}>
            <HeroBanner/>
            <div className={`message-addToCart ${activeMessage ? "active" : ""}`} ref={messageRef}>
                <span className='message-addToCart__text'>Sản phẩm đã được thêm vào giỏ hàng</span>
                <Link to="/cart">
                <div className='message-addToCart__btn btn'>View Cart</div> 
                </Link>     
            </div>
            <ProductView
                product={product}
                setActiveMessage = {setActiveMessage}
            />
            <div className='related-product'>
                <h3 className='related-product__title'>RELATED PRODUCTS</h3>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                >
                    {
                        relatedProducts.map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.images[0]}
                                name={String(item.title)}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))
                    }
                </Grid>
            </div>
        </Helmet>
    )
}

export default Product