import React from 'react';

const serviceLocations = () => {
    return (
        <div className="serviceLocations">
            <h1 className="serviceLocations-title">נקודות שירות</h1>
            <p className="serviceLocations-para">.שרות מוצרים קטנים הנתמך במעבדה ראשית ומחסן חלפים במרכז הלוגיסטי באשדוד ויותר מ-20 מעבדות שרות בפריסה ארצית</p>
            <div className="serviceLocations-chart">
                <div className="serviceLocations-chart-header">
                    <h1>טלפון</h1>
                    <h1>כתובת</h1>
                    <h1>שם</h1>
                    <h1>עיר</h1>
                </div>
                <div className="serviceLocations-chart-line">
                    <p>03-5403333</p>
                    <p>אוסישקין 58, רמת השרון</p>
                    <p>כל אור</p>
                    <p>באר שבע</p>
                </div>
            </div>
        </div>
    )
}

export default serviceLocations;