import React, { Component } from 'react';
import ProductHeader from '../ProductPage/ProductHeader/ProductHeader';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../../Redux/store';
import { accordionToggle1, accordionToggle2, productHandle, fetchSparePartsByProductModel } from '../../Redux/actions';

class ProductPage extends Component {
    componentDidMount() {
        productHandle();
        store.dispatch(fetchSparePartsByProductModel());
    }

    render() {
        console.log(this.props.sparePartsByProductModel)
        return (
            <div className="productPage">
                <ProductHeader 
                    title={this.props.chosenProduct.type} 
                    price={this.props.chosenProduct.price} 
                    model={this.props.chosenProduct.model}/>
                <div className="row">
                    <div className="col-0 col-md-1 col-lg-0 col-xl-1"></div>
                    <div className="slider my-5 col-12 col-md-10 col-lg-5 col-xl-5 d-flex align-items-center">
                        {
                            this.props.productsImages.map((item,index) => {
                                return(
                                    <input key={index} type="radio" className="slider-input" name="slider" id={`slide${index+1}`} />
                                )
                            }) 
                        }
                        <div className="slider-wrapper">
                            <div className="inner">
                                {
                                    this.props.productsImages.map((item,index) => {
                                        return(
                                            <article key={item.id}>
                                                <img 
                                                    className="mb-5" src={`https://storage.googleapis.com/hamilton-beach-israel/hamilton-beach-images/${item.model.slice(0,5)}/${item.model.slice(0,5)}-${index+1}.jpg`} 
                                                    alt={`${item.model}`}/>
                                            </article>
                                        )
                                    }) 
                                }
                            </div>
                        </div>
                        <div className="slider-dot-control">
                            {
                                this.props.productsImages.map((item,index) => {
                                    return(
                                        <label htmlFor={`slide${index+1}`} key={index}></label>
                                    )
                                }) 
                            }
                        </div>
                    </div>
                    <div className="card pr-0 pr-lg-5 pr-xl-0 col-10 col-md-11 col-lg-6 col-xl-5 pb-5 my-5 col-sm-10 mx-sm-auto mx-md-0">
                        <h1 className="card-item-title">המילטון ביץ׳ - {this.props.chosenProduct.type} </h1>
                        <div className="card-body d-flex flex-column align-items-end">
                            <h5 className="card-title">{this.props.chosenProduct.short_description}</h5>
                            <p className="card-text-model text-secondary">{this.props.chosenProduct.model} דגם</p>
                            <p className="card-text-last text-secondary">מחיר קודם {`${this.props.chosenProduct.last_price}.99₪`}</p>
                            <p className="card-text-price">{`${this.props.chosenProduct.price}.99₪`}</p>
                            <p className="card-text mb-5 ">חסכון של {`${this.props.chosenProduct.last_price-this.props.chosenProduct.price}₪`}</p>
                            <p className="card-text mb-5 ">משלוח בתוספת תשלום</p>
                            <button className="add-to-cart-btn">הוסף לעגלה</button>
                        </div>  
                    </div>
                </div>
                <div className="row productPage-accordion">
                    <div className="productPage-accordion-line col-12 col-sm-10 col-lg-11 col-xl-10 px-sm-0 px-5 mx-auto my-2 d-flex flex-column">
                        <div className="productPage-accordion-line-div d-flex flex-row-reverse justify-content-between align-items-center">
                            <h1 className="productPage-accordion-line-div-title mb-0">מפרט טכני</h1>
                            <h1 onClick={this.props.openAccordion1} className="productPage-accordion-line-btn"><ion-icon name="add"></ion-icon></h1>
                        </div>
                        <div className="row productPage-accordion-line-text">
                            <div className="productPage-accordion-line-text-div1 col-12" style={{display: `${this.props.dis1}`}}>
                                <p>דלחגכלדחגכדלגח &#183;</p>
                                <p>דלחגכלדחגכדלגח &#183;</p>
                                <p>דלחגכלדחגכדלגח &#183;</p>
                                <p>דלחגכלדחגכדלגח &#183;</p>
                            </div>
                        </div>
                    </div>
                    <div className="productPage-accordion-line2 col-12 col-sm-10 col-lg-11 col-xl-10 px-sm-0 px-5 mx-auto d-flex flex-column">
                        <div className="productPage-accordion-line2-div d-flex flex-row-reverse justify-content-between align-items-center">
                            <h1 className="productPage-accordion-line2-div-title mb-0">חלקי חילוף</h1>
                            <h1 onClick={this.props.openAccordion2} className="productPage-accordion-line-btn"><ion-icon name="add"></ion-icon></h1>
                        </div>
                        <div className="row productPage-accordion-line2-text" style={{display: `${this.props.dis2}`}}>
                            <div className="productPage-accordion-line2-text-div2" style={{display: `${this.props.dis2}`}}>
                                {
                                    this.props.sparePartsByProductModel.map((part, index) => {
                                        return (
                                            <Link to={`/spare-parts/${part.name}`} key={index} className="productPage-accordion-line2-text-div2-sparePart">
                                                <img src={part.image_url} alt={part.hebrew_name} />
                                                <p className="productPage-accordion-line2-text-div2-sparePart-name">{part.hebrew_name}</p>
                                                <p className="productPage-accordion-line2-text-div2-sparePart-price">{`${part.price}₪`}</p>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        dis1: state.accordionToggleDis1,
        dis2: state.accordionToggleDis2,
        chosenProduct: state.chosenProduct,
        productsImages: state.productsImages,
        sparePartsByProductModel: state.sparePartsByProductModel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAccordion1: () => dispatch(accordionToggle1()),
        openAccordion2: () => dispatch(accordionToggle2()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);