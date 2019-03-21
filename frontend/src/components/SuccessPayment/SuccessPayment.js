import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class SuccessPayment extends Component {

      
  render() {


    return (
      <div className="successPayment">
        <h1 className="successPayment-header">הרכישה אושרה ובוצעה בהצלחה <i className="fas fa-check"></i></h1>
        <p className="successPayment-line">אישור לדואר האלקטרוני ישלח אליך בדקות הקרובות עם כל פרטי ההזמנה. אנו עובדים על ביצוע ההזמנהת והפריט/ים ישלח/ו אליך עד 7 ימי עסקים.</p>
        <p className="successPayment-line">לכל בעיה או שאלה יש לפנות אלינו ב:</p>
        <p className="successPayment-line">דואר אלקטרוני: <Link to="/contact"><span>sherut@shaoulian.co.il</span></Link></p>
        <p className="successPayment-line">טלפון: <span>09-7409835/6</span></p>
        <p className="successPayment-line">שעות פעילות שירות הלקוחות:</p>
        <p className="successPayment-line">ימים א׳ עד ה׳ בין השעות 9:00-17:00</p>
        <p className="successPayment-line">נשמח גם בעתיד לעמוד לרשותך!</p>
        <p className="successPayment-line">תודה שקנית Hamilton Beach</p>
      </div>
    );
  }
}

export default connect(null)(SuccessPayment);