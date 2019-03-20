import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../../Redux/store';
import { fetchProductImageBackground,
         fetchRightProductCategoryDetails, 
         getProductByClick, 
         getProducts, 
         getProductCategory,
         openingForm} from '../../Redux/actions';
import { Link } from 'react-router-dom';

class ProductCategoryPage extends Component {
    
    componentDidMount() {
        store.dispatch(getProducts());
        fetchProductImageBackground();
        store.dispatch(fetchRightProductCategoryDetails());
        getProductCategory();
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            getProductCategory();
        }
        if(prevProps.location.pathname !== this.props.location.pathname) {
            fetchProductImageBackground();
            store.dispatch(fetchRightProductCategoryDetails());
        }
    }

    
    render() {
        return (
            <div className="productCategoryPage">
                <div className="productCategoryPage__section" style={{backgroundImage: "url(" + this.props.backgroundImages + ")"}}>
                    <p className="productCategoryPage__section-type">קטגורית מוצרים</p>
                    <h1 className="productCategoryPage__section-title">{this.props.chosenProductCategory}</h1>
                </div>
                <div className="productCategoryPage-shortDescription">
                    <p className="productCategoryPage-shortDescription-title">
                        {this.props.chosenProductCategoryDetails.title}
                    </p>
                    <p className="productCategoryPage-shortDescription-text">
                    {this.props.chosenProductCategoryDetails.para_text}
                    </p>
                </div>
                <div className="productCategoryPage-productsSection">
                    {   
                        this.props.products.map((item, index) => {
                            return (
                                item.category === window.location.href.slice(window.location.href.indexOf('products/')+9)?
                                    <div className="productCategoryPage-productsSection-item" key={index}>
                                        <Link to={`/products/${item.category}/${item.model}`}>
                                            <img onClick={this.props.getProduct} className="productCategoryPage-productsSection-item-img" src={`https://storage.googleapis.com/hamilton-beach-israel/hamilton-beach-images/${item.model.slice(0,5)}/${item.model.slice(0,5)}-1.jpg`} alt={item.short_description}/>
                                        </Link>
                                        <p className="productCategoryPage-productsSection-item-title">{item.short_description}</p>
                                        <p className="productCategoryPage-productsSection-item-model">דגם {item.model}</p>
                                        <p className="productCategoryPage-productsSection-item-price">{`${item.price}.99₪`}</p>
                                        <button onClick={openingForm} id={item.model} value={item.category} className="productCategoryPage-productsSection-item-btn">הוסף לעגלה</button>
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
        chosenProductCategoryDetails: state.chosenProductCategoryDetails,
        chosenProductCategory: state.chosenProductCategory
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProduct: (product) => dispatch(getProductByClick(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryPage);