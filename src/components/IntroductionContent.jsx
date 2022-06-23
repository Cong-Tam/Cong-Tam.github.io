import React from 'react'
import PropTypes from 'prop-types'

const IntroductionContent = props => {
    return (
        <div className='introduction__content'>
            <div dangerouslySetInnerHTML={{__html: props.data}}></div>
        </div>
    )
}

IntroductionContent.propTypes = {
    data: PropTypes.string.isRequired
}

export default IntroductionContent