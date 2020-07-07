import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <div className="footer">
            <div className="footer__section">
                <div className="footer__section-navigation">
                    <h1 className="footer__section-navigation-title">מפת האתר</h1>
                    <Link className="footer__section-navigation-mainPage" to="/"><p>ראשי</p></Link>
                    <Link className="footer__section-navigation-products" to="/products"><p>מוצרים</p></Link>
                    <Link className="footer__section-navigation-recipes" to="/recipes"><p>מתכונים</p></Link>
                    <Link className="footer__section-navigation-authorizedSellers" to="/authorized-sellers"><p>משווקים מורשים</p></Link>
                    <Link className="footer__section-navigation-about" to="/about"><p>אודותינו</p></Link>
                    <Link className="footer__section-navigation-contact" to="/contact"><p>צור קשר</p></Link>
                </div>
                <div className="footer__section-websites">
                    <h1 className="footer__section-websites-title">אתרי החברה</h1>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.shaoulian.co.il" target="_blank"> shaoulian.co.il</a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.lofra.co.il" target="_blank"> lofra.co.il </a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.sol.co.il" target="_blank">sol.co.il</a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.turboair.co.il" target="_blank">turboair.co.il</a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.valera.co.il" target="_blank">Valera.co.il </a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.ufesa.co.il" target="_blank">ufesa.co.il</a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.boohr.co.il" target="_blank">Boohr.co.il</a>
                </div>
                <div className="footer__section-socialMedia">
                    <h1 className="footer__section-socialMedia-title">מוזמנים לבקר</h1>
                    <div className="footer__section-socialMedia-div">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/HamiltonBeach" className="fab fa-facebook-f"><p></p></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hamiltonbeach/" className="fab fa-instagram"><p></p></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/HamiltonBeach" className="fab fa-twitter"><p></p></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/hamiltonbeach/" className="fab fa-pinterest-p"><p></p></a>
                    </div>
                </div>
                <div className="footer__section-companyDetails">
                    <h1 className="footer__section-companyDetails-title">מידע נוסף</h1>
                    <p className="footer__section-companyDetails-phone">טלפון: 09-7409835/6</p>
                    <p className="footer__section-companyDetails-address">כתובת: הרימון 3 אבן יהודה</p>
                    <p className="footer__section-companyDetails-email">דואר אלקטרוני: sherut@shaoulian.co.il</p>
                    <p className="footer__section-companyDetails-workingHours">שעות פעילות: א׳ - ה׳ בין השעות 9:00-17:00</p>
                </div>
            </div>
            <p className="footer-copyright">המילטון ביץ׳ הוא סימן מסחרי רשום, בערבון מוגבל. תחת שימוש ברישיון של חברת שאוליאן סחר בע"מ. מותגי המילטון ביץ׳, בערבון מוגבל.</p>
            <p className="footer-copyright">Hamilton beach &#174; is a registered trademark of Hamilton Beach Brands, Inc. used under license by Shaoulian Trading LTD, Israel © Hamilton beach brands, inc.</p>
        </div>
    )
}

export default footer;