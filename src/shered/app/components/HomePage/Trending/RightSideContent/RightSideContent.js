import React from 'react';
import { Link } from 'react-router-dom';

const rightSideContent = () => {
    return (
        <Link to="/recipes" className="rightSideContent">
            <div className="rightSideContent__section">
                <h1 className="rightSideContent__section-title">מתכונים</h1>
            </div>
        </Link>
    )
}

export default rightSideContent;