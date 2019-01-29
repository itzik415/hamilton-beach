import React from 'react';
import LeftSideContent from './LeftSideContent/LeftSideContent';
import RightSideContent from './RightSideContent/RightSideContent';

const Slider = () => {
    return (
        <div className="trending">
            <LeftSideContent />
            <div className="trending-space"></div>
            <RightSideContent />
        </div>
    )
}

export default Slider;