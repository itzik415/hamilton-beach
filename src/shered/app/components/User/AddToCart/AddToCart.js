import React from 'react';
import { connect } from 'react-redux';
import { closingCartForm } from '../../../Redux/actions';
import { Link } from 'react-router-dom';

const addToCartForm = (props) => {
    return (
        <div className="addToCartForm" style={{display: `${props.cartFormDisplay}`}}>
            <div className="addToCartForm-cartSituastion" >
                <div className="addToCartForm-cartSituastion-content">
                    <div className="addToCartForm-cartSituastion-content-header">
                        <h2 className="addToCartForm-cartSituastion-content-header-title">המוצרים הבאים נמצאים ברשימת הקניות שלך:</h2>
                        <span onClick={props.closingForm} className="addToCartForm-cartSituastion-content-header-close">&times;</span>
                    </div>
                    <div className="addToCartForm-cartSituastion-content-body">
                        {
                            props.cartProducts.map((item, index) => {
                                return (
                                    <div key={index} className="addToCartForm-cartSituastion-content-body-products">
                                        <p className="addToCartForm-cartSituastion-content-body-products-model">
                                            {item.model.length === 5? `דגם מוצר: ${item.model} (${item.serial})`: `דגם מוצר: ${item.model.slice(0,5)}`} 
                                        </p>
                                        <p className="addToCartForm-cartSituastion-content-body-products-amount">
                                            {`${item.amount} x ${item.category}`}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="addToCartForm-cartSituastion-content-footer">
                        <button onClick={props.closingForm} className="addToCartForm-cartSituastion-content-footer-continueBuy">המשך רכישה</button>
                        <Link to="/shopping-cart" onClick={props.closingForm} className="addToCartForm-cartSituastion-content-footer-moveToCart">עגלת קניות</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartFormDisplay: state.cartFormDisplay,
        cartProducts: state.shoppingCart.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closingForm: () => dispatch(closingCartForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addToCartForm);