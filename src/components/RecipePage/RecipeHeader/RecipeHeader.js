import React from 'react';

const recipeHeader = (props) => {
    console.log(props.time)
    return (
        <div className="recipeHeader">
            <div className="recipeHeader__section">
                <p className="recipeHeader__section-type">מתכון</p>
                <h1 className="recipeHeader__section-title">{props.name}</h1>
                <div className="recipeHeader__section-properties">
                    <p>{props.type}</p>
                    <p>{props.kosher}</p>
                    <p>{props.level}</p>
                    <p>{props.time.slice(3)}</p>
                    <span>{props.time.slice(0,3)}</span>
                </div>
            </div>
        </div>
    )
}

export default recipeHeader;