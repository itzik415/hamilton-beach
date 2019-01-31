import React from 'react';

const productHeader = () => {
    return (
        <div className="productHeader">
            <div className="productHeader__section">
                <p className="productHeader__section-type">דף מוצר</p>
                <h1 className="productHeader__section-title">בלנדר</h1>
                <div className="productHeader__section-properties">
                    <p>צמחוני</p>
                    <p>עיקרית</p>
                    <p>כשר</p>
                    <p>קל</p>
                    <p>שעות</p>
                </div>
            </div>
        </div>
    )
}

export default productHeader;