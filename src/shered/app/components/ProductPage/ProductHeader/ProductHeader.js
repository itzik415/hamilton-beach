import React from 'react';

const productHeader = (props) => {
    return (
        <div className="productHeader">
            <div className="productHeader__section">
                <h1 className="productHeader__section-title">{props.title}</h1>
                <div className="productHeader__section-properties">
                    <p>{props.model}</p>
                    <p>{`${props.price} ₪`}</p>
                </div>
            </div>
        </div>
    )
}

export default productHeader;