import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { handleSubmitCart } from '../../../Redux/actions';
const jwt =  require('jsonwebtoken');

class ShoppingCartForm extends Component {

    render() {
        return (
            <form className="shoppingCartForm"  action="http://localhost:5000/api/pay" method="post">
                <input type="text" name="user" value={jwt.decode(localStorage.jwt).user.email} style={{display: 'none'}} readOnly/>
                <h1 className="shoppingCartForm-header">פרטים אישיים</h1>
                <div className="shoppingCartForm-main">
                    <div className="shoppingCartForm-main-personalData">
                        <div className="shoppingCartForm-main-personalData-name">
                            <input 
                                className="shoppingCartForm-main-personalData-name-input" 
                                type="text" 
                                name="name" 
                                placeholder="שם מלא"
                                required/>
                            <ion-icon id="name-icon-payment" name="person"></ion-icon>
                            <p className="shoppingCartForm-main-personalData-name-text">שם מלא</p>
                        </div>
                        <div className="shoppingCartForm-main-personalData-email">
                            <input 
                                className="shoppingCartForm-main-personalData-email-input" 
                                type="email" 
                                name="email" 
                                minLength="6"
                                placeholder="דוא״ל"
                                required/>
                            <ion-icon id="email-icon-payment" name="mail"></ion-icon>
                            <p className="shoppingCartForm-main-personalData-email-text">דוא״ל</p>
                        </div>
                        <div className="shoppingCartForm-main-personalData-phone">
                            <input 
                                className="shoppingCartForm-main-personalData-phone-input" 
                                type="text" 
                                name="phonenumber" 
                                placeholder="טלפון"
                                required/>
                            <ion-icon id="phone-icon-payment" name="call"></ion-icon>
                            <p className="shoppingCartForm-main-personalData-phone-text">טלפון</p>
                        </div>
                    </div>
                    <div className="shoppingCartForm-main-locationData">
                        <div className="shoppingCartForm-main-locationData-name">
                            <input 
                                className="shoppingCartForm-main-locationData-name-input" 
                                type="text" 
                                name="street" 
                                placeholder="רחוב ומספר"
                                required/>
                            <ion-icon id="name-icon-payment" name="locate"></ion-icon>
                            <p className="shoppingCartForm-main-locationData-name-text">רחוב ומספר</p>
                        </div>
                        <div className="shoppingCartForm-main-locationData-email">
                            <input 
                                className="shoppingCartForm-main-locationData-email-input" 
                                type="text" 
                                name="city" 
                                minLength="6"
                                placeholder="עיר"
                                required/>
                            <ion-icon id="email-icon-payment" name="map"></ion-icon>
                            <p className="shoppingCartForm-main-locationData-email-text">עיר</p>
                        </div>
                        <div className="shoppingCartForm-main-locationData-phone">
                            <input 
                                className="shoppingCartForm-main-locationData-phone-input" 
                                type="text" 
                                name="zip" 
                                placeholder="מיקוד"
                                required/>
                            <ion-icon id="phone-icon-payment" name="clipboard"></ion-icon>
                            <p className="shoppingCartForm-main-locationData-phone-text">מיקוד</p>
                        </div>
                    </div>
                </div>
                <div className="shoppingCartForm-payment">
                    <p className="shoppingCartForm-payment-price">עלות ללא משלוח: {`${this.props.shoppingCart.totalCartPrice}₪`}</p>
                    <p className="shoppingCartForm-payment-delivery">עלות משלוח: 70₪ (משלוח עד הבית)</p>
                    <p className="shoppingCartForm-payment-totalPrice">סה״כ לתשלום: {`${this.props.shoppingCart.totalCartPrice + 60}₪`}</p>
                    {/* <p className="shoppingCartForm-payment-totalPrice">עלות משלוח: {`${this.props.shoppingCart.totalCartPrice}₪`}</p>
                    <p className="shoppingCartForm-payment-totalPrice">עלות לא כולל משלוח: {`${this.props.shoppingCart.totalCartPrice}₪`}</p>
                    <p className="shoppingCartForm-payment-totalPrice">סה״כ לתשלום: {`${this.props.shoppingCart.totalCartPrice}₪`}</p> */}
                    {/* <button className="shoppingCartForm-payment-checkoutBtn">לתשלום</button> */}
                    <button className="shoppingCartForm-payment-button" type="submit">
                        <img className="shoppingCartForm-payment-button-img" src="https://storage.googleapis.com/hamilton-beach-israel/different-images/paypal-payment-button.png" alt="Check out with PayPal" />
                    </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         deleteProduct: () => dispatch(deleteProduct())
//     }
// }

export default connect(mapStateToProps, null)(ShoppingCartForm);