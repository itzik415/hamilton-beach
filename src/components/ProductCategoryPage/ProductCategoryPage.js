import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../../Redux/store';
import { fetchProductImageBackground , getProductByClick,getProducts} from '../../Redux/actions';
import { Link } from 'react-router-dom';

class ProductCategoryPage extends Component {
    
    componentDidMount() {
        fetchProductImageBackground();
        store.dispatch(getProducts());
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            fetchProductImageBackground();
            getProducts();
        }
    }

    
    render() {
        return (
            <div className="productCategoryPage">
                <div className="productCategoryPage__section" style={{backgroundImage: "url(" + this.props.backgroundImages + ")"}}>
                    <p className="productCategoryPage__section-type">קטגורית מוצרים</p>
                    <h1 className="productCategoryPage__section-title">מטחנות קפה</h1>
                </div>
                <div className="productCategoryPage-shortDescription">
                    <p className="productCategoryPage-shortDescription-title">
                        בשלו ארוחות בלתי נשכחות עם מתכונים מהמטבח הפרטי שלנו
                    </p>
                    <p className="productCategoryPage-shortDescription-text">
                    עיינו במתכונים, תכננו תפריטים למסיבה, מיצאו את ההשראה לסעודת ערב ולבדוק מתכונים שיכולים לעזור לכם להפיק את המרב מהמוצרים החדשים שלכם.
                    כל מתכון שלנו נבחן בקפידה במטבח שלנו על ידי המכשירים שלנו כדי להבטיח ביצועים אופטימליים, וכמובן שגם הטעם בהתאם.
                    מתבשילי תנור איטיים לגלידת וניל קלאסית, תוכלו למצוא בדיוק את מה שאתם מחפשים כאשר אתם מחפשים מתכונים לפי הקטגוריות השונות.
                    המטבח שלנו יוצר מתכונים חדשים כל הזמן. גם למוצרים חדשים וגם בכדי לנסות לקלוע לטעם שלכם. היו הראשונים לנסות את המתכונים החדשים ביותר שלנו כאשר אתם בודקים אותנו שוב ושוב
                    </p>
                </div>
                <div className="productCategoryPage-productsSection">
                    {   
                        this.props.products.map((item, index) => {
                            return (
                                item.category === window.location.href.slice(window.location.href.indexOf('products/')+9)?
                                    <div className="productCategoryPage-productsSection-item" key={index}>
                                        <Link to={`/products/${item.category}/${item.model}`}>
                                            <img onClick={this.props.getProduct} className="productCategoryPage-productsSection-item-img" src={`https://storage.googleapis.com/hamilton-beach-israel/hamilton-beach-images/${item.model.slice(0,5)}/${item.model.slice(0,5)}-1.jpg`} alt={item.shortdescription}/>
                                        </Link>
                                        <p className="productCategoryPage-productsSection-item-title">{item.shortdescription}</p>
                                        <p className="productCategoryPage-productsSection-item-model">{item.model} דגם</p>
                                        <p className="productCategoryPage-productsSection-item-price">{`${item.price}.99₪`}</p>
                                        <button className="productCategoryPage-productsSection-item-btn">הוסף לעגלה</button>
                                    </div>:null
                                
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        backgroundImages:state.productCategoryBackgroundImage,
        products: state.products,
        chosenProduct: state.chosenProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProduct: (product) => dispatch(getProductByClick(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryPage);