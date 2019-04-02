import React from 'react';

const recipeHeader = (props) => {
    return (
        <div className="recipeHeader">
            <div className="recipeHeader__section">
                <h1 className="recipeHeader__section-title">{props.name}</h1>
                <div className="recipeHeader__section-properties">
                    <span>{props.time.slice(0,3)}</span>
                    <p>{props.time.slice(3)}</p>
                    <p>{props.level}</p>
                    <p>{props.kosher}</p>
                    <p>{props.type}</p>
                </div>
            </div>
        </div>
    )
}

export default recipeHeader;