import React from 'react';
import { Link } from 'react-router-dom';


const cancelPayment = () => {
    return (
      <div className="cancelPayment">
        <h1 className="cancelPayment-header">הרכישה בוטלה <i class="fas fa-times"></i></h1>
        <p className="cancelPayment-line">אנו מצטערים כי ביטלת את ההזמנה. אם נתקלת בבעיה כלשהי אתה מוזמן לחזור לדף הראשי ולבצע את ההזמנה בשנית.</p>
        <p className="cancelPayment-line">לכל בעיה או שאלה יש לפנות אלינו ב:</p>
        <p className="cancelPayment-line">דואר אלקטרוני: <Link to="/contact"><span>sherut@shaoulian.co.il</span></Link></p>
        <p className="cancelPayment-line">טלפון: <span>09-7409835/6</span></p>
        <p className="cancelPayment-line">שעות פעילות שירות הלקוחות:</p>
        <p className="cancelPayment-line">ימים א׳ עד ה׳ בין השעות 9:00-17:00</p>
        <p className="cancelPayment-line">נשמח גם בעתיד לעמוד לרשותך!</p>
        <p className="cancelPayment-line"> Hamilton Beach</p>
      </div>
    );
}

export default cancelPayment;