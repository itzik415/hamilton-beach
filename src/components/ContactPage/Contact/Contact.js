import React from 'react';
import { connect } from 'react-redux';


const contact = () => {
    return (
    <form className="contact">
        <h1 className="contact-title">צור קשר</h1>
        <div className="contact-topFields">
            <div className="contact-topFields-email">
                <input 
                    className="contact-topFields-email-input" 
                    type="email" 
                    name="email" 
                    placeholder="דוא״ל"
                    autoComplete="nope"
                    required/>
                <ion-icon id="email-icon" name="mail"></ion-icon>
                <p className="contact-topFields-email-text">דוא״ל</p>
            </div>
            <div className="contact-topFields-name">
                <input 
                    className="contact-topFields-name-input" 
                    type="text" 
                    name="name" 
                    placeholder="שם מלא"
                    autoComplete="nope"
                    required/>
                <ion-icon id="name-icon" name="person"></ion-icon>
                <p className="contact-topFields-name-text">שם מלא</p>
            </div>
        </div>
        <div className="contact-bottomFields">
            <div className="contact-bottomFields-image">
                <input 
                    className="contact-bottomFields-image-input" 
                    type="file" 
                    name="fileupload" 
                    placeholder="file upload"
                    required/>
            </div>
            <div className="contact-bottomFields-phone">
                <input 
                    className="contact-bottomFields-phone-input" 
                    type="text" 
                    name="phonenumber" 
                    placeholder="טלפון"
                    autoComplete="nope"
                    required/>
                <ion-icon id="phone-icon" name="call"></ion-icon>
                <p className="contact-topFields-phone-text">טלפון</p>
            </div>
        </div>
        <div className="contact-text">
            <textarea className="contact-text-textarea" required></textarea>
        </div>
        <input className="contact-submitButton" type="submit" value="שלח" />
    </form>

    )
}

export default connect(null, null)(contact);
