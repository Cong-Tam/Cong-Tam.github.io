import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../assets/images/logo.jpg'

const mainNav = [
    {
        display: "Giới thiệu",
        path: "/gioi-thieu",
        subNav: [],
    },
    {
        display: "sản phẩm",
        path: "/danh-sach-san-pham",
        subNav: [
            {
                title: "Bàn",
                path: "/",
                links: [
                    {
                        name: "Bàn làm việc",
                        path: "/danh-sach-san-pham/ban-lam-viec"
                    },
                    {
                        name: "Bàn trà",
                        path: "/danh-sach-san-pham/ban-tra"
                    },
                    {
                        name: "Bàn trang điểm",
                        path: "/danh-sach-san-pham/ban-trang-diem"
                    },
                    {
                        name: "Bàn ăn",
                        path: "/danh-sach-san-pham/ban-an"
                    },
                ]
            },
            {
                title: "Giường",
                path: "/",
                links: [
                    {
                        name: "Giường gỗ công nghiệp",
                        path: "/danh-sach-san-pham/giuong-go-cong-nghiep"
                    },
                    {
                        name: "Giường gỗ tự nhiên",
                        path: "/danh-sach-san-pham/giuong-go-tu-nhien"
                    }
                ]
            },
            {
                title: "Kệ",
                path: "/",
                links: [
                    {
                        name: "Kệ sách",
                        path: "/danh-sach-san-pham/ke-sach"
                    },
                    {
                        name: "Kệ Tivi",
                        path: "/danh-sach-san-pham/ke-tivi"
                    },
                    {
                        name: "Kệ trang trí",
                        path: "/danh-sach-san-pham/ke-trang-tri"
                    },
                    {
                        name: "Kệ đầu giường",
                        path: "/danh-sach-san-pham/ke-dau-giuong"
                    },
                ]
            },
            {
                title: "Ghế",
                path: "/",
                links: [
                    {
                        name: "Ghế sofa",
                        path: "/danh-sach-san-pham/ghe-sofa"
                    },
                    {
                        name: "Ghê bành",
                        path: "/danh-sach-san-pham/ghe-banh"
                    },
                    {
                        name: "Ghế đơn",
                        path: "/danh-sach-san-pham/ghe-don"
                    }
                ]
            },
            {
                title: "Tủ",
                path: "/",
                links: [
                    {
                        name: "Tủ quần áo",
                        path: "/danh-sach-san-pham/tu-quan-ao"
                    },
                    {
                        name: "Tủ giày",
                        path: "/danh-sach-san-pham/tu-giay"
                    },
                    {
                        name: "Tủ lưu trữ",
                        path: "/danh-sach-san-pham/tu-luu-tru"
                    }
                ]
            },
        ]
    },
    {
        display: "Trang trí và gia dụng",
        path: "/danh-sach-san-pham/trang-tri-va-gia-dung",
        subNav: [
            {
                title: "",
                path: "/",
                links: [
                    {
                        name: "Đèn",
                        path: "/danh-sach-san-pham/den",
                    },
                    {
                        name: "Gương để bàn",
                        path: "/danh-sach-san-pham/guong-de-ban",
                    },
                    {
                        name: "Giỏ đựng đồ dùng",
                        path: "/danh-sach-san-pham/gio-dung",
                    },
                    {
                        name: "Khung treo, kệ để bàn",
                        path: "/danh-sach-san-pham/khung-treo-ke-de-ban",
                    },
                    {
                        name: "Thảm",
                        path: "/danh-sach-san-pham/tham",
                    },
                ]
            },
        ]
    },
    {
        display: "Bộ sưu tập",
        path: "/danh-sach-san-pham/bo-suu-tap",
        subNav: [
            {
                title: "",
                path: "/",
                links: [
                    {
                        name: "HIA concept",
                        path: "/danh-sach-san-pham/hia-concept"
                    },
                    {
                        name: "ALI concept",
                        path: "/danh-sach-san-pham/ali-concept"
                    },
                    {
                        name: "YEN concept",
                        path: "/danh-sach-san-pham/yen-concept"
                    },
                    {
                        name: "RETRO concept",
                        path: "/danh-sach-san-pham/retro-concept"
                    }
                ]
            },
        ]
    },
    {
        display: "Blog",
        path: "/blog",
        subNav: [],
    }
]

const mobileNav = [
    {
        display: "Giới thiệu",
        path: "/gioi-thieu",
        subNav: [],
    },
    {
        display: "sản phẩm",
        path: "/danh-sach-san-pham",
        subNav: [
            {
                title: "Bàn",
                path: "/",
                links: [
                    {
                        name: "Bàn làm việc",
                        path: "/danh-sach-san-pham/ban-lam-viec"
                    },
                    {
                        name: "Bàn trà",
                        path: "/danh-sach-san-pham/ban-tra"
                    },
                    {
                        name: "Bàn trang điểm",
                        path: "/danh-sach-san-pham/ban-trang-diem"
                    },
                    {
                        name: "Bàn ăn",
                        path: "/danh-sach-san-pham/ban-an"
                    },
                ]
            },
            {
                title: "Giường",
                path: "/",
                links: [
                    {
                        name: "Giường gỗ công nghiệp",
                        path: "/danh-sach-san-pham/giuong-go-cong-nghiep"
                    },
                    {
                        name: "Giường gỗ tự nhiên",
                        path: "/danh-sach-san-pham/giuong-go-tu-nhien"
                    }
                ]
            },
            {
                title: "Kệ",
                path: "/",
                links: [
                    {
                        name: "Kệ sách",
                        path: "/danh-sach-san-pham/ke-sach"
                    },
                    {
                        name: "Kệ Tivi",
                        path: "/danh-sach-san-pham/ke-tivi"
                    },
                    {
                        name: "Kệ trang trí",
                        path: "/danh-sach-san-pham/ke-trang-tri"
                    },
                    {
                        name: "Kệ đầu giường",
                        path: "/danh-sach-san-pham/ke-dau-giuong"
                    },
                ]
            },
            {
                title: "Ghế",
                path: "/",
                links: [
                    {
                        name: "Ghế sofa",
                        path: "/danh-sach-san-pham/ghe-sofa"
                    },
                    {
                        name: "Ghê bành",
                        path: "/danh-sach-san-pham/ghe-banh"
                    },
                    {
                        name: "Ghế đơn",
                        path: "/danh-sach-san-pham/ghe-don"
                    }
                ]
            },
            {
                title: "Tủ",
                path: "/",
                links: [
                    {
                        name: "Tủ quần áo",
                        path: "/danh-sach-san-pham/tu-quan-ao"
                    },
                    {
                        name: "Tủ giày",
                        path: "/danh-sach-san-pham/tu-giay"
                    },
                    {
                        name: "Tủ lưu trữ",
                        path: "/danh-sach-san-pham/tu-luu-tru"
                    }
                ]
            },
        ]
    },
    {
        display: "Trang trí và gia dụng",
        path: "/danh-sach-san-pham/trang-tri-va-gia-dung",
        subNav: [
            {
                title: "Đèn",
                path: "/danh-sach-san-pham/den",
                links: []
            },
            {
                title: "Gương để bàn",
                path: "/danh-sach-san-pham/guong-de-ban",
                links: []
            },
            {
                title: "Giỏ đưng đồ dùng",
                path: "/danh-sach-san-pham/gio-dung",
                links: []
            },
            {
                title: "Khùn treo, kệ để bàn",
                path: "/danh-sach-san-pham/khung-treo-ke-de-ban",
                links: []
            },
            {
                title: "Thảm",
                path: "/danh-sach-san-pham/tham",
                links: []
            },
        ]
    },
    {
        display: "Gương để bàn",
        path: "",
        subNav: [
            {
                title: "HIA concept",
                path: "/danh-sach-san-pham/hia-concept",
                links: []
            },
            {
                title: "Ali concept",
                path: "/danh-sach-san-pham/ali-concept",
                links: []
            },
            {
                title: "Yen concept",
                path: "/danh-sach-san-pham/yen-concept",
                links: []
            },
            {
                title: "retro concept",
                path: "/danh-sach-san-pham/retro-concept",
                links: []
            }
        ]
    },
    {
        display: "Blog",
        path: "/blog",
        subNav: [],
    }
]

const Header = () => {
    const cartItems = useSelector((state) => state.cartItems.value)

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)
    const [menuMobileActive, setMenuMobileActive] = useState(false)
    const headerRef = useRef(null);

    const [menuActive, setMenuActive] = useState(undefined)
    const [subMenuActive, setSubMenuActive] = useState([])

    const subMenuToggle = (i, subI) => {
        if (subMenuActive[0] === i && subMenuActive[1] === subI)
            setSubMenuActive([])
        else setSubMenuActive([i, subI])
    }

    useEffect(() => {
        setMenuMobileActive(false)
        setMenuActive(undefined)
    }, [pathname])
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add("shrink")
            } else {
                headerRef.current.classList.remove("shrink")
            }
        })
    }, [])

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__menu__toggle" onClick={() => setMenuMobileActive(!menuMobileActive)}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="header__logo">
                    <Link to="">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__left">
                        {
                            mainNav.map((item, index) => (
                                <div className={`header__menu__item ${index === activeNav ? 'active' : ''}`} key={index}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>
                                    <div className="header__menu__item__sub">
                                        {
                                            item.subNav.map((subItem, index) => (
                                                <div key={index} className="header__menu__item__sub__item"  >
                                                    <h3 className="header__menu__item__sub__item__title">{subItem.title}</h3>
                                                    {subItem.links.map((link, index) => (
                                                        <div key={index}
                                                            className="header__menu__item__sub__item__link"
                                                        >
                                                            <Link to={link.path}>{link.name}</Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item header__cart">
                            <Link to="/cart">
                                <i className="fas fa-box-open"></i>
                                {
                                    cartItems.length <= 0 ? null: <span className='header__cart__quantity'>{cartItems.length}</span> 
                                }
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i className="far fa-user"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header__menu-mobile ${menuMobileActive ? "active": ""}`} >
                {
                    mobileNav.map((item, index) => (
                        <div
                            key={index}
                            className={`header__menu-mobile__item ${menuActive === index ? 'active' : ''}`}
                            onClick={() => setMenuActive(index)}
                        >
                            {item.subNav.length > 0 ? <span>{item.display}</span> : <Link to={item.path}>{item.display}</Link>}
                            <div className="header__menu-mobile__item__sub">
                                {
                                    item.subNav.map((subItem, subIndex) => (
                                        <div
                                            key={subIndex} className={`header__menu-mobile__item__sub__item ${subMenuActive[1] === subIndex && subMenuActive[0] === index ? 'active' : ''}`}
                                            onClick={() => subMenuToggle(index, subIndex)}
                                        >
                                        {subItem.links.length > 0 ? <span className="header__menu-mobile__item__sub__item__title">{subItem.title}</span> : 
                                            <Link to={subItem.path} className="header__menu-mobile__item__sub__item__title">{subItem.title}</Link>
                                        }
                                            <div className="header__menu-mobile__item__sub__item__links">
                                                {subItem.links.map((link, index) => (
                                                    <div key={index}
                                                        className="header__menu-mobile__item__sub__item__link"
                                                    >
                                                        <Link to={link.path}>{link.name}</Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header