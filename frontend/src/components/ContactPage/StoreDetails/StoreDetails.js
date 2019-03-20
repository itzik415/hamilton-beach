import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

const storeDetails = () => {
    return (
    <div className="storeDetails">
        <h1 className="storeDetails-title">אולם תצוגה</h1>
        <div className="storeDetails-info">
            <p><span>שעות פעילות:</span> א׳-ה׳ בין השעות 10:00-18:00 ו׳ בין השעות 9:00-14:00 </p>
            <p><span>טלפון:</span> 09-7409835/6</p>
            <p><span>כתובת:</span> אבא אבן 12, הרצליה פיתוח</p>
        </div>
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe 
                    title="store map location"
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=%D7%90%D7%91%D7%90%20%D7%90%D7%91%D7%9F%2012%2C%20%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
                <a href="https://www.pureblack.de/werbeagentur/">pureblack.de</a>
            </div>
        </div>
    </div>

    )
}

export default connect(null, null)(storeDetails);