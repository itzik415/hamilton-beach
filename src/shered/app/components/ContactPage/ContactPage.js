import React from 'react';
import OfficeDetails from './OfficeDetails/OfficeDetails';
import StoreDetails from './StoreDetails/StoreDetails';
import Contact from './Contact/Contact';

const contactPage = () => {
    return (
    <div className="contactPage">
        <div className="contactPage__section">
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

export default contactPage;