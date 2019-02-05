import React from 'react';
import { Link } from 'react-router-dom';

const products = () => {
    return (
        <div className="products">
            <div className="recipes-line">
                <hr className="recipes-line-hr"/>
                <h1 className="recipes-line-header">מוצרים</h1>
            </div>
            <div className="products__section">
                <div className="products__section-top">
                    <div className="products__section-top-product">
                        <img className="products__section-top-product-img" src={"https://www.hamiltonbeach.com/media/products/blender-black-and-stainless-54221.jpg"} alt="product title"/>
                        <div className="products__section-top-product-details">
                            <p className="products__section-top-product-details-category">בלנדרים</p>
                            <p className="products__section-top-product-details-description">בלנדר בעל תוכניות מגוונות, 700 וואט, בצבע שחור כסוף, כוס זכוכית בעלת תכולה של 1.2 ליטרים</p>
                            <p className="products__section-top-product-details-model">דגם - 54221</p>
                            <p className="products__section-top-product-details-lastPrice">מחיר קודם 299.99₪</p>
                            <p className="products__section-top-product-details-price">239.99₪</p>
                            <p className="products__section-top-product-details-save">חיסכון של 60₪</p>
                            <p className="products__section-top-product-details-cart">הוסף לעגלה</p>
                        </div>
                    </div>
                    <div className="products__section-top-product">
                        <img className="products__section-top-product-img" src={"https://www.hamiltonbeach.com/media/products/blender-black-and-stainless-54221.jpg"} alt="product title"/>
                        <div className="products__section-top-product-details">
                            <p className="products__section-top-product-details-category">בלנדרים</p>
                            <p className="products__section-top-product-details-description">בלנדר בעל תוכניות מגוונות, 700 וואט, בצבע שחור כסוף, כוס זכוכית בעלת תכולה של 1.2 ליטרים</p>
                            <p className="products__section-top-product-details-model">דגם - 54221</p>
                            <p className="products__section-top-product-details-lastPrice">מחיר קודם 299.99₪</p>
                            <p className="products__section-top-product-details-price">239.99₪</p>
                            <p className="products__section-top-product-details-save">חיסכון של 60₪</p>
                            <p className="products__section-top-product-details-cart">הוסף לעגלה</p>
                        </div>
                    </div>
                </div>
                <div className="products__section-bottom">
                    <div className="products__section-bottom-product">
                        <img className="products__section-bottom-product-img" src={"https://www.hamiltonbeach.com/media/products/blender-black-and-stainless-54221.jpg"} alt="product-bottom title"/>
                        <div className="products__section-bottom-product-details">
                            <p className="products__section-bottom-product-details-category">בלנדרים</p>
                            <p className="products__section-bottom-product-details-description">בלנדר בעל תוכניות מגוונות, 700 וואט, בצבע שחור כסוף, כוס זכוכית בעלת תכולה של 1.2 ליטרים</p>
                            <p className="products__section-bottom-product-details-model">דגם - 54221</p>
                            <p className="products__section-bottom-product-details-lastPrice">מחיר קודם 299.99₪</p>
                            <p className="products__section-bottom-product-details-price">239.99₪</p>
                            <p className="products__section-top-product-details-save">חיסכון של 60₪</p>
                            <p className="products__section-bottom-product-details-cart">הוסף לעגלה</p>
                        </div>
                    </div>
                    <div className="products__section-bottom-product">
                        <img className="products__section-bottom-product-img" src={"https://www.hamiltonbeach.com/media/products/blender-black-and-stainless-54221.jpg"} alt="product-bottom title"/>
                        <div className="products__section-bottom-product-details">
                            <p className="products__section-bottom-product-details-category">בלנדרים</p>
                            <p className="products__section-bottom-product-details-description">בלנדר בעל תוכניות מגוונות, 700 וואט, בצבע שחור כסוף, כוס זכוכית בעלת תכולה של 1.2 ליטרים</p>
                            <p className="products__section-bottom-product-details-model">דגם - 54221</p>
                            <p className="products__section-bottom-product-details-lastPrice">מחיר קודם 299.99₪</p>
                            <p className="products__section-bottom-product-details-price">239.99₪</p>
                            <p className="products__section-top-product-details-save">חיסכון של 60₪</p>
                            <p className="products__section-bottom-product-details-cart">הוסף לעגלה</p>
                        </div>
                    </div>    
                </div>
            </div>
            <Link to="/products" className="products-button">לכל המוצרים</Link>
        </div>
    )
}

export default products;