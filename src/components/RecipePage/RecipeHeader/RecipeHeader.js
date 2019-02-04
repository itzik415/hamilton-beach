import React from 'react';


const recipeHeader = () => {
    return (
        <div className="recipeHeader">
            <div className="recipeHeader__section">
                <p className="recipeHeader__section-type">מתכון</p>
                <h1 className="recipeHeader__section-title">מיץ סחוט ירוק טבעי</h1>
                <div className="recipeHeader__section-properties">
                    <p>צמחוני</p>
                    <p>עיקרית</p>
                    <p>כשר</p>
                    <p>קל</p>
                    <p>שעות</p>
                    <span>3.5</span>
                </div>
            </div>
        </div>
    )
}

export default recipeHeader;