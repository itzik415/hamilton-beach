import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideContent = () => {
    return (
        <Link to="/products" className="leftSideContent">
            <div className="leftSideContent__section">
                <h1 className="leftSideContent__section-title">מוצרים</h1>
            </div>
        </Link>
    )
}

export default LeftSideContent;