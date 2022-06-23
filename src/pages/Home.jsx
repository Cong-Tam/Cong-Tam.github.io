import React from 'react'
import HeroSlider from '../components/HeroSlider'
import Helmet from '../components/Helmet'
import heroSliderData from '../assets/fake-data/hero-slider'
import Grid from '../components/Grid'
import bannerData from '../assets/fake-data/banner'
import Banner from '../components/Banner'
import HomeContent from '../components/HomeContent'

const Home = () => {
    return (
        <Helmet title='Trang chủ'>
            <HeroSlider 
                data={heroSliderData}
            />
            <Grid
                col={4}
                mdCol={2}
                smCol={1}
            >
                {
                    bannerData.map((item,index)=>(
                        <Banner 
                            key={index}
                            data={item}
                        />
                    ))
                }
            </Grid>
            <HomeContent/>
        </Helmet>
    ) 
}

export default Home