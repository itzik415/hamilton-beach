import React, { Component } from 'react';
import { fetchProductCategory } from '../../Redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductsPage extends Component {

    componentDidMount() {
        fetchProductCategory();
    }

    render() {
        console.log(this.props.productsCategories.map((item,index) => item));
        return (
            <div className="productsPage">
                <div className="productsPage__section">
                    <p className="productsPage__section-type">מוצרים</p>
                    <h1 className="productsPage__section-title"> מוצרים לפי קטגוריה</h1>
                </div>
                <div className="productsPage-main">
                    <div className="productsPage-main-shortDescription">
                        <p className="productsPage-main-shortDescription-title">
                            המוצרים שלנו מעוצבים בקפידה על מנת לעשות לכם את החיים קלים יותר.
                        </p>
                        <p className="productsPage-main-shortDescription-text">
                        אנו משתמשים בתובנות הצרכנים, מחקרים מעמיקים ובדיקות קפדניות כדי לספק את הפתרון הטוב ביותר לצרכים היומיומיים שלכם.
                        בין אם זה הכנת ארוחות טעימות ומשקאות ללא מאמץ, או דאגה שהבגדים שאתם לובשים יראו במיטבם.
                        אתם יכולים לסמוך על המותג כי בילה מעל ל 100 שנים של יצירת מוצרים עם דגש על רצונותיכם וצרכיכם.
                        </p>
                    </div>
                </div>
                <div className="productsPage-productsPart">
                    <div className="productsPage-productsPart-product">
                    {
                        this.props.productsCategories.map((item,index) => {    
                            return (
                                <Link to={`/products/${item[0]}`} key={index} className="productsPage-productsPart-product-imageDiv">
                                    <img src={item[2]} alt={item[3]} />
                                    <p>{item[3]}</p>
                                </Link>
                            )
                        })
                    }
                
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productsCategories: state.productsCategories,
    }
}

export default connect(mapStateToProps, null)(ProductsPage);