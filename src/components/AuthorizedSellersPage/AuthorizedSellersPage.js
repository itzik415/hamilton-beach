import React from 'react';

const authorizedSellers = () => {
    return (
        <div className="authorizedSellers">
            <div className="authorizedSellers__section">
                <p className="authorizedSellers__section-type">תמיכה</p>
                <h1 className="authorizedSellers__section-title">משווקים מורשים</h1>
            </div>
            <div className="authorizedSellers-main">
                <div className="authorizedSellers-main-chart">
                    <div className="authorizedSellers-main-chart-header">
                        <h1>טלפון</h1>
                        <h1>כתובת</h1>
                        <h1>שם</h1>
                        <h1>עיר</h1>
                    </div>
                    <div className="authorizedSellers-main-chart-line">
                        <p>03-5403333</p>
                        <p>אוסישקין 58, רמת השרון</p>
                        <p>כל אור</p>
                        <p>באר שבע</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default authorizedSellers;