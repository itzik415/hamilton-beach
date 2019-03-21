import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductByClick, openingForm } from '../../../Redux/actions';

const products = (props) => {
    return (
        <div className="products">
            <div className="recipes-line">
                <h1 className="recipes-line-header">מוצרים</h1>
                <hr className="recipes-line-hr"/>
            </div>
            <div className="products__section">
                <div className="products__section-top">
                    {
                        props.products.map((item, index) => {
                            return (
                                index <= 1?
                                    <div className="products__section-top-product" key={item.id}>
                                        <div className="products__section-top-product-details">
                                            <p className="products__section-top-product-details-category">{item.type}</p>
                                            <p className="products__section-top-product-details-description">{item.short_description}</p>
                                            <p className="products__section-top-product-details-model">{item.model} דגם</p>
                                            <p className="products__section-top-product-details-lastPrice">מחיר קודם {`${item.last_price}₪`}</p>
                                            <p className="products__section-top-product-details-price">{`${item.price}₪`}</p>
                                            <p className="products__section-top-product-details-save">חיסכון של {`${item.last_price - item.price}₪`}</p>
                                            <button onClick={openingForm} id={item.model} value={item.category} className="products__section-top-product-details-cart">הוסף לעגלה</button>
                                        </div>
                                        <Link className="products__section-top-product-link" to={`/products/${item.category}/${item.model}`}>
                                            <img onClick={props.getProduct} className="products__section-top-product-link-img" src={`${item.image_url}`} alt={`${item.short_description}`}/>
                                        </Link>
                                    </div>:
                                null
                            )
                            
                        })
                    }
                </div>
                <div className="products__section-bottom">
                    {
                        props.products.map((item, index) => {
                            return (
                                index >= 2 && index <=3?
                                    <div className="products__section-bottom-product" key={item.id}>
                                        <div className="products__section-bottom-product-details">
                                            <p className="products__section-bottom-product-details-category">{item.type}</p>
                                            <p className="products__section-bottom-product-details-description">{item.short_description}</p>
                                            <p className="products__section-bottom-product-details-model">{item.model} דגם</p>
                                            <p className="products__section-bottom-product-details-lastPrice">מחיר קודם {`${item.last_price}₪`}</p>
                                            <p className="products__section-bottom-product-details-price">{`${item.price}₪`}</p>
                                            <p className="products__section-bottom-product-details-save">חיסכון של {`${item.last_price - item.price}₪`}</p>
                                            <button onClick={openingForm} id={item.model} value={item.category} className="products__section-bottom-product-details-cart">הוסף לעגלה</button>
                                        </div>
                                        <Link className="products__section-bottom-product-link" to={`/products/${item.category}/${item.model}`}>
                                            <img onClick={props.getProduct} className="products__section-bottom-product-link-img" src={`${item.image_url}`} alt={`${item.short_description}`}/>
                                        </Link>
                                    </div>:
                                null
                            )
                        })
                    }
                </div>
            </div>
            <Link to="/products" className="products-button">לכל המוצרים</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products,
        chosenProduct: state.chosenProduct,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProduct: (product) => dispatch(getProductByClick(product)),
        // openingForm: (e) => dispatch(openingForm(e)),
        // addToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(products);

// UPDATE products SET mainimage = 'https://storage.googleapis.com/hamilton-beach-israel/hamilton-beach-images/70825/70825-1.jpg' WHERE id = 2;
