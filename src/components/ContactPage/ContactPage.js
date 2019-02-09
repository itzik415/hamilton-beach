import React from 'react';
import { connect } from 'react-redux';
import OfficeDetails from './OfficeDetails/OfficeDetails';
import StoreDetails from './StoreDetails/StoreDetails';
import Contact from './Contact/Contact';
// import { Link } from 'react-router-dom';
// import RecipeHeader from './RecipeHeader/RecipeHeader';

const contactPage = () => {
    return (
    <div className="contactPage">
        <div className="contactPage__section">
            <p className="contactPage__section-type">תמיכה</p>
            <h1 className="contactPage__section-title">צור קשר</h1>
        </div>
        <div className="contactPage-main">
            <Contact />
            <div className="contactPage-main-locationDetails">
                <OfficeDetails />
                <StoreDetails />
            </div>    
        </div>
    </div>

    )
}

export default connect(null, null)(contactPage);