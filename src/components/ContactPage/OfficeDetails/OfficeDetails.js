import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import RecipeHeader from './RecipeHeader/RecipeHeader';

const officeDetails = () => {
    return (
    <div className="officeDetails">
        <h1 className="officeDetails-title">משרדים</h1>
        <div className="officeDetails-info">
            <p><span>שעות פעילות:</span> א׳-ה׳ בין השעות 9:00-17:0</p>
            <p><span>טלפון:</span> 09-7409835/6</p>
            <p><span>כתובת:</span> רימון 3, אבן יהודה</p>
        </div>
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe 
                    title="office map location"
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=%D7%A8%D7%99%D7%9E%D7%95%D7%9F%203%2C%20%D7%90%D7%91%D7%9F%20%D7%99%D7%94%D7%95%D7%93%D7%94&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
                <a href="https://www.pureblack.de/werbeagentur/">pureblack.de</a>
            </div>
        </div>
    </div>

    )
}

export default connect(null, null)(officeDetails);