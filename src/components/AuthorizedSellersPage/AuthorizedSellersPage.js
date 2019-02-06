import React from 'react';

const authorizedSellers = () => {
    return (
        <div className="authorizedSellers">
            <h1 className="authorizedSellers-title">משווקים מורשים</h1>
            <div className="authorizedSellers-chart">
                <div className="authorizedSellers-chart-header">
                    <h1>טלפון</h1>
                    <h1>כתובת</h1>
                    <h1>שם</h1>
                    <h1>עיר</h1>
                </div>
                <div className="authorizedSellers-chart-line">
                    <p>03-5403333</p>
                    <p>אוסישקין 58, רמת השרון</p>
                    <p>כל אור</p>
                    <p>באר שבע</p>
                </div>
            </div>
        </div>
    )
}

export default authorizedSellers;