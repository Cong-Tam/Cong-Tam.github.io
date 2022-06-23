import React from 'react'

import Helmet from '../components/Helmet'
import HeroBanner from '../components/HeroBanner'
import IntroductionContent from '../components/IntroductionContent'
import introductionText from '../assets/fake-data/introduction'
const Introduction = () => {
    return (
        <Helmet title='Giới thiệu'>
            <HeroBanner/>
            <IntroductionContent data={introductionText}/>
        </Helmet>
    )
}

export default Introduction