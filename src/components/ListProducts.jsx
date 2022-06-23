import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'
import ReactPaginate from 'react-paginate'
import ProductCard from './ProductCard'

const ListProducts = props => {
    const productsPerPage = 9
    const [products, setProducts] = useState(props.products)
    const [pageNumber, setPageNumber] = useState(0)
    const [pageCount, setPageCount] = useState(1)
    const [sortOption, setSortOption] = useState(null)

    useEffect(() => {
        setProducts(props.products)
        setPageNumber(0)
        setSortOption(null)
    }, [props.products])

    const totalProduct = props.products.length

    const pagesVisited = pageNumber * productsPerPage

    const pageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    useEffect(() => {
        setPageCount(Math.ceil(totalProduct / productsPerPage))
    }, [props.products])

    useEffect(() => {
        let temp = props.products
        if (sortOption === ">") {
            temp = temp.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : (Number(a.price) < Number(b.price) ? -1 : 0))
        }

        else if (sortOption === "<") {
            temp = temp.sort((a, b) => Number(a.price) < Number(b.price) ? 1 : (Number(a.price) > Number(b.price) ? -1 : 0))
        }
        else {
            temp = temp.sort((a, b) => a.title > b.title ? 1 : (a.title < b.title ? -1 : 0))
        }
        setProducts(temp.slice(pagesVisited, pagesVisited + productsPerPage))
    }, [pageNumber, sortOption, props.products])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageNumber])

    const sortRef = useRef()
    const toggleListSort = () => {
        sortRef.current.classList.toggle("active")
    }

    return (
        <div className="catalog__content">
            <div className='catalog__content__result'>
                <span className='catalog__content__result__text'>{`Kết quả tìm thấy ${totalProduct} sản phẩm`}</span>
                <div className='catalog__content__sort' onClick={() => toggleListSort()}>
                    <span>Sắp xếp</span>
                    <i className="fas fa-angle-down"></i>
                    <ul className='catalog__content__sort__list' ref={sortRef}>
                        <li className='catalog__content__sort__list__item' onClick={() => setSortOption(">")}>Giá tăng dần</li>
                        <li className='catalog__content__sort__list__item' onClick={() => setSortOption("<")}>Giá giảm dần</li>
                    </ul>
                </div>
            </div>
            <Grid
                col={3}
                mdCol={3}
                smCol={1}
            >
                {
                    products.map((item, index) => (
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
            <ReactPaginate
                previousLabel={<i className="fas fa-chevron-left"></i>}
                nextLabel={<i className="fas fa-chevron-right"></i>}
                pageCount={pageCount}
                onPageChange={pageChange}
                containerClassName={`pagination ${pageCount <= 1 ? "disable" : ""}`}
                previousLinkClassName='pagination__pre'
                nextLinkClassName='pagination__next'
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                forcePage={pageNumber}
            />
        </div>
    )
}

ListProducts.propTypes = {
    products: PropTypes.array.isRequired
}

export default ListProducts