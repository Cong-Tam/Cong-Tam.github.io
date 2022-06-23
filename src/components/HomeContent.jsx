import React from 'react'
import Grid from './Grid'

import bannerImageData from '../assets/fake-data/banner-img'
import avatar from '../assets/images/avatar.png'

const HomeContent = () => {
    return (
        <div className='home-content'>
            <Grid
                col={3}
                mdCol={3}
                smCol={1}
            >
                {
                    bannerImageData.map((item, index) => (
                        <div key={index} className='home-content__img'>
                            <img src={item.img} alt="" />
                        </div>
                    ))
                }
            </Grid>
            <div className='home-content__slogan'>
                <h1>"We shape our home and then our home shapes us"</h1>
                <div className='home-content__slogan__avatar'>
                    <img src={avatar} alt="" />
                    <p>Simie Team with love</p>
                </div>
            </div>
            <div className='home-content__knowledge'>
                <h5>Kiến thức nội thất</h5>
                <ul>
                    <li>Bí quyết vệ sinh, bảo quản nội thất gỗ công nghiệp</li>
                    <li>5 lời khuyên cho bàn làm việc hoàn hảo tại nhà</li>
                    <li>Mẹo bố trí phòng ngủ để đêm ngon giấc</li>
                    <li>Phân biệt các loại gỗ công nghiệp</li>
                    <li>Tại sao gỗ sồi được yêu thích ở các nước âu mỹ</li>
                </ul>
            </div>
        </div>
    )
}

export default HomeContent