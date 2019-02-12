import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const products = (props) => {
    console.log(props.products);
    return (
        <div className="products">
            <div className="recipes-line">
                <hr className="recipes-line-hr"/>
                <h1 className="recipes-line-header">מוצרים</h1>
            </div>
            <div className="products__section">
                <div className="products__section-top">
                    {
                        props.products.map((item, index) => {
                            if(index <= 1){
                                return (
                                    <div className="products__section-top-product" key={item.id}>
                                    <img className="products__section-top-product-img" src={`${item.mainimage}`} alt={`${item.shortdescription}`}/>
                                    <div className="products__section-top-product-details">
                                        <p className="products__section-top-product-details-category">{item.type}</p>
                                        <p className="products__section-top-product-details-description">{item.shortdescription}</p>
                                        <p className="products__section-top-product-details-model">{item.model} דגם</p>
                                        <p className="products__section-top-product-details-lastPrice">מחיר קודם {`${item.lastprice}.99₪`}</p>
                                        <p className="products__section-top-product-details-price">{`${item.price}.99₪`}</p>
                                        <p className="products__section-top-product-details-save">חיסכון של {`${item.lastprice - item.price}₪`}</p>
                                        <p className="products__section-top-product-details-cart">הוסף לעגלה</p>
                                    </div>
                                </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="products__section-bottom">
                    {
                        props.products.map((item, index) => {
                            if(index >= 2 && index <=3){
                                return (
                                    <div className="products__section-bottom-product" key={item.id}>
                                    <img className="products__section-bottom-product-img" src={`${item.mainimage}`} alt={`${item.shortdescription}`}/>
                                    <div className="products__section-bottom-product-details">
                                        <p className="products__section-bottom-product-details-category">{item.type}</p>
                                        <p className="products__section-bottom-product-details-description">{item.shortdescription}</p>
                                        <p className="products__section-bottom-product-details-model">{item.model} דגם</p>
                                        <p className="products__section-bottom-product-details-lastPrice">מחיר קודם {`${item.lastprice}.99₪`}</p>
                                        <p className="products__section-bottom-product-details-price">{`${item.price}.99₪`}</p>
                                        <p className="products__section-bottom-product-details-save">חיסכון של {`${item.lastprice - item.price}₪`}</p>
                                        <p className="products__section-bottom-product-details-cart">הוסף לעגלה</p>
                                    </div>
                                </div>
                                )
                            }
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
        products: state.products
    }
}

export default connect(mapStateToProps, null)(products);

// UPDATE products SET mainimage = 'https://storage.googleapis.com/hamilton-beach-israel/hamilton-beach-images/70825/70825-1.jpg' WHERE id = 2;
