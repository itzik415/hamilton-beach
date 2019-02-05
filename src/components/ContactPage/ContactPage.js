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
        <Contact />
        <div className="contactPage-locationDetails">
            <OfficeDetails />
            <StoreDetails />
        </div>
    </div>

    )
}

export default connect(null, null)(contactPage);