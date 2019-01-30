import React from 'react';
import { Link } from 'react-router-dom';

const products = () => {
    return (
        <div className="products">
            <div className="recipes-line">
                <hr className="recipes-line-hr"/>
                <h1 className="recipes-line-header">מוצרים</h1>
                {/* <hr className="recipes-line-hr"/> */}
            </div>
            <div className="products__section">
                <div className="products__section-product">
                    <img className="products__section-product-img" src={"https://www.hamiltonbeach.com/assets/components/phpthumbof/cache/blender-black-and-stainless-54221.111fc434bc294f424116715a7e3e95e1.jpg"} alt="product title"/>
                    <div className="products__section-product-details">
                        <p className="products__section-product-details-category">בלנדרים</p>
                        <p className="products__section-product-details-model">דגם: 54221</p>
                        <p className="products__section-product-details-description">בלנדר בעל תוכניות מגוונות, 700 וואט, בצבע שחור כסוף, כוס זכוכית בעלת תכולה של 1.2 ליטרים</p>
                        <div className="products__section-product-details-bottom">
                            <p className="products__section-product-details-bottom-price">240₪</p>
                            <p className="products__section-product-details-bottom-cart"><ion-icon id="cart-logo" name="cart"></ion-icon></p>
                        </div>
                    </div>
                </div>
                <div className="products__section-product">
                    <img className="products__section-product-img" src={"https://www.hamiltonbeach.com/assets/components/phpthumbof/cache/blender-black-and-stainless-54221.111fc434bc294f424116715a7e3e95e1.jpg"} alt="product title"/>
                    <div className="products__section-product-details">
                        <p className="products__section-product-details-category">בלנדרים</p>
                        <p className="products__section-product-details-model">דגם: 54221</p>
                        <p className="products__section-product-details-description">בלנדר בעל תוכניות מגוונות, 700 וואט, בצבע שחור כסוף, כוס זכוכית בעלת תכולה של 1.2 ליטרים</p>
                        <div className="products__section-product-details-bottom">
                            <p className="products__section-product-details-bottom-price">240₪</p>
                            <p className="products__section-product-details-bottom-cart"><ion-icon id="cart-logo" name="cart"></ion-icon></p>
                        </div>
                    </div>
                </div>
                <div className="products__section-product">
                    <img className="products__section-product-img" src={"https://www.hamiltonbeach.com/assets/components/phpthumbof/cache/blender-black-and-stainless-54221.111fc434bc294f424116715a7e3e95e1.jpg"} alt="product title"/>
                    <div className="products__section-product-details">
                        <p className="products__section-product-details-category">בלנדרים</p>
                        <p className="products__section-product-details-model">דגם: 54221</p>
                        <p className="products__section-product-details-description">בלנדר בעל תוכניות מגוונות, 700 וואט, בצבע שחור כסוף, כוס זכוכית בעלת תכולה של 1.2 ליטרים</p>
                        <div className="products__section-product-details-bottom">
                            <p className="products__section-product-details-bottom-price">240₪</p>
                            <p className="products__section-product-details-bottom-cart"><ion-icon id="cart-logo" name="cart"></ion-icon></p>
                        </div>
                    </div>
                </div>
                <div className="products__section-product">
                    <img className="products__section-product-img" src={"https://www.hamiltonbeach.com/assets/components/phpthumbof/cache/blender-black-and-stainless-54221.111fc434bc294f424116715a7e3e95e1.jpg"} alt="product title"/>
                    <div className="products__section-product-details">
                        <p className="products__section-product-details-category">בלנדרים</p>
                        <p className="products__section-product-details-model">דגם: 54221</p>
                        <p className="products__section-product-details-description">בלנדר בעל תוכניות מגוונות, 700 וואט, בצבע שחור כסוף, כוס זכוכית בעלת תכולה של 1.2 ליטרים</p>
                        <div className="products__section-product-details-bottom">
                            <p className="products__section-product-details-bottom-price">240₪</p>
                            <p className="products__section-product-details-bottom-cart"><ion-icon id="cart-logo" name="cart"></ion-icon></p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/products" className="products-button">לכל המוצרים</Link>
        </div>
    )
}

export default products;