import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <div className="footer">
            <div className="footer__section">
                <div className="footer__section-companyDetails">
                    <h1 className="footer__section-companyDetails-title">מידע נוסף</h1>
                    <p className="footer__section-companyDetails-phone">טלפון: 09-7409835/6</p>
                    <p className="footer__section-companyDetails-address">כתובת: הרימון 3 אבן יהודה</p>
                    <p className="footer__section-companyDetails-email">sherut@shaoulian.co.il :מייל</p>
                    <p className="footer__section-companyDetails-workingHours">שעות פעילות: א׳ - ה׳ בין השעות 9:00-17:00</p>
                </div>
                <div className="footer__section-socialMedia">
                    <h1 className="footer__section-socialMedia-title">מוזמנים לבקר</h1>
                    <div className="footer__section-socialMedia-div">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/HamiltonBeach" className="fab fa-facebook-f"></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hamiltonbeach/" className="fab fa-instagram"></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/HamiltonBeach" className="fab fa-twitter"></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/hamiltonbeach/" className="fab fa-pinterest-p"></a>
                    </div>
                </div>
                <div className="footer__section-websites">
                    <h1 className="footer__section-websites-title">אתרי החברה</h1>
                    <div className="footer__section-websites-div">
                        <a className="footer__section-websites-div-brandName" rel="noopener noreferrer" href="http://www.shaoulian.co.il" target="_blank"> shaoulian.co.il</a>
                        <a className="footer__section-websites-div-brandName" rel="noopener noreferrer" href="http://www.lofra.co.il" target="_blank"> lofra.co.il </a>
                        <a className="footer__section-websites-div-brandName" rel="noopener noreferrer" href="http://www.sol.co.il" target="_blank">sol.co.il</a>
                        <a className="footer__section-websites-div-brandName" rel="noopener noreferrer" href="http://www.turboair.co.il" target="_blank">turboair.co.il</a>
                        <a className="footer__section-websites-div-brandName" rel="noopener noreferrer" href="http://www.valera.co.il" target="_blank">Valera.co.il </a>
                        <a className="footer__section-websites-div-brandName" rel="noopener noreferrer" href="http://www.ufesa.co.il" target="_blank">ufesa.co.il</a>
                        <a className="footer__section-websites-div-brandName" rel="noopener noreferrer" href="http://www.boohr.co.il" target="_blank">Boohr.co.il</a>
                    </div>
                </div>
                <div className="footer__section-navigation">
                    <h1 className="footer__section-navigation-title">מפת האתר</h1>
                    <Link className="footer__section-navigation-mainPage" to="/"><p>ראשי</p></Link>
                    <Link className="footer__section-navigation-recipes" to="/recipes"><p>מתכונים</p></Link>
                    <Link className="footer__section-navigation-authorizedSellers" to="/support/authorized-sellers"><p>משווקים מורשים</p></Link>
                    <Link className="footer__section-navigation-about" to="/about"><p>אודותינו</p></Link>
                    <Link className="footer__section-navigation-contact" to="/support/contact"><p>צור קשר</p></Link>
                </div>
            </div>
            <p className="footer-copyright">© כל הזכויות שמורות לחברת שאוליאן סחר בע״מ 2019
</p>
        </div>
    )
}

export default footer;