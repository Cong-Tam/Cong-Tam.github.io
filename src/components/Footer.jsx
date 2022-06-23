import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'

const footerAbout = [
    {
        display: "0906.523.783"
    },
    {
        display: "71A Lê Lợi – Hải Châu – Đà Nẵng "
    },
    {
        display: "Simiehomedanang@gmail.com"
    }
]

const footerCustomerLinks = [
    {
        display: "Hình thức thanh toán",
        path: ""
    },
    {
        display: "Chính sách đổi trả – bảo hành",
        path: ""
    },
    {
        display: "Chính sách giao hàng",
        path: ""
    },
    {
        display: "Chính sách bán hàng – lưu kho",
        path: ""
    }
]


const Footer = () => {



    return (
        <footer className='footer'>
            <div className="container">
                <Grid 
                    col={2}
                    mdCol={2}
                    smCol={1}
                >
                    <div>
                        <div className="footer__title">Liên hệ</div>
                        <div className="footer__content">
                            {
                                footerAbout.map((item, index)=>(
                                    <p key={index}>{item.display}</p>
                                ))
                            }
                        </div>
                        <div className='footer__social'>
                            <a href="">
                                <div className='footer__social__link'><i className="fab fa-facebook"></i></div>
                            </a>
                            <a href="">
                                <div className='footer__social__link'><i className="fab fa-instagram"></i></div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">quy định - chính sách</div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index)=>(
                                    <div key={index} className='footer__content__link'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer