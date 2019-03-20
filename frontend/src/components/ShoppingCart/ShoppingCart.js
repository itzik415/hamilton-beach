import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProduct, plusProduct, minusProduct} from '../../Redux/actions';
import ShoppingCartForm from './ShoppingCartForm/ShoppingCartForm';

class ShoppingCart extends Component {

    render() {
        return (
            <div className="shoppingCart row">
                <div className="shoppingCart__section">
                    <p className="shoppingCart__section-type">קניות</p>
                    <h1 className="shoppingCart__section-title">עגלת קניות</h1>
                </div>
                <div className="shoppingCart-main row col-sm-11 col-12">
                    <div className="shoppingCart-main-title row col-12">
                        <p className="col-4 col-sm-4 ">מוצר</p>
                        <p className="col-3 col-sm-3 col-md-2 ">מחיר המוצר</p>
                        <p className="col-1 col-md-2">כמות</p>
                        <p className="col-2"></p>
                        <p className="col-2">מחיר</p>
                    </div>
                    {
                        this.props.shoppingCart.products.map((item, index) => {
                            return (
                                <div className="shoppingCart-main-cart row col-12" key={index}>
                                    <div className="shoppingCart-main-cart-product col-4 col-sm-4">
                                        <img className="shoppingCart-main-cart-product-img" src={item.image_url} alt="product name" />
                                        <p className="shoppingCart-main-cart-product-name">{item.category}</p>
                                    </div>
                                    <p className="shoppingCart-main-cart-price col-3 col-sm-3 col-md-2">{item.price}₪</p>
                                    <div className="shoppingCart-main-cart-amount col-1 col-md-2 col-lg-2">
                                        <button onClick={minusProduct} id={item.model} name={item.serial} value="1">-</button>
                                        <p className="minusProduct" id={`model-${item.serial>0?item.serial:item.model}`}>{item.amount}</p>
                                        <button onClick={plusProduct} id={item.model} name={item.serial} value="1">+</button>
                                    </div>
                                    <button onClick={deleteProduct} name={item.serial} id={item.model} className="shoppingCart-main-cart-remove2 col-2">X</button>
                                    <button onClick={deleteProduct} name={item.serial} id={item.model} className="shoppingCart-main-cart-remove col-2">הסר מוצר</button>
                                    <p className="shoppingCart-main-cart-totalPrice col-2">{item.price * item.amount}₪</p>
                                </div>
                            )
                        })
                    }
                    <ShoppingCartForm />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: () => dispatch(deleteProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);