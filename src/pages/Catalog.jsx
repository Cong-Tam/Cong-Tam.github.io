import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import productData from '../assets/fake-data/product'
import category from '../assets/fake-data/category'
import ListProducts from '../components/ListProducts'


const Catalog = () => {
    const { slug } = useParams()

    const productList = productData.getAllProducts()

    const [filter, setFilter] = useState("")
    const [products, setProducts] = useState(productList)

    useEffect(() => {
        if (slug != undefined)
            setFilter(slug)
        else setFilter("")
    }, [slug])


    const updateProducts = useCallback(
        () => {
            let temp = productList
            if (filter !== "")
                temp = temp.filter(item => item.categorySlug.includes(filter))
            setProducts(temp)
        },
        [filter, productList]
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [filter, productList])

    return (
        <Helmet title='Sản phẩm'>
            <div className="catalog">
                <div className="catalog__filter">
                    <h3 className="catalog__filter__title">Danh mục</h3>
                    <div className="catalog__filter__content">
                        {
                            category.map((item, index) => (
                                <div className="catalog__filter__content__list" key={index}>
                                    <Link to={`/danh-sach-san-pham/${item.categorySlug}`} className='catalog__filter__content__list__title'>{item.display}</Link>
                                    {
                                        item.subCategory.map((subItem, subIndex) => (
                                            <div
                                                key={subIndex}
                                                className={`catalog__filter__content__list__item 
                                                ${subItem.categorySlug === slug ? "active" : ""}`}
                                            >
                                                <Link to={`/danh-sach-san-pham/${subItem.categorySlug}`} key={subIndex}>{subItem.display}</Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <ListProducts
                    products={products}
                />
            </div>
        </Helmet>
    )
}

export default Catalog