import React, { Component } from 'react';
import ProductHeader from '../ProductPage/ProductHeader/ProductHeader';
import { connect } from 'react-redux';
import { accordionToggle1, accordionToggle2, productHandle } from '../../Redux/actions';

class ProductPage extends Component {
    // constructor(props){
    //     super(props);
    // }
    componentDidMount() {
        productHandle();
    }

    render() {
        return (
            <div className="productPage">
                <ProductHeader title={this.props.chosenProduct.type} model={this.props.chosenProduct.model}/>
                <div className="row">
                    <div className="col-0 col-xl-2"></div>
                    <div className="my-5 col-12 col-md-6 col-xl-5 d-flex align-items-center">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://www.hamiltonbeach.com/media/products/blender-chopper-58149.jpg" className="d-block w-100 mx-auto" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://www.hamiltonbeach.com/media/products/blender-chopper-58149-1.jpg" className="d-block w-100 mx-auto" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://www.hamiltonbeach.com/media/products/blender-chopper-58149-2.jpg" className="d-block w-100 mx-auto" alt="..."/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span aria-hidden="true"><ion-icon id="prev-arrow" name="arrow-dropleft-circle"></ion-icon></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span aria-hidden="true"><ion-icon id="next-arrow" name="arrow-dropright-circle"></ion-icon></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="card col-10 col-md-5 col-xl-4 py-5 my-5 col-sm-10 mx-sm-auto mx-md-0">
                        <h1 className="card-item-title">המילטון ביץ׳ - {this.props.chosenProduct.type} </h1>
                        <div className="card-body d-flex flex-column align-items-end">
                            <h5 className="card-title">{this.props.chosenProduct.shortdescription}</h5>
                            <p className="card-text-model text-secondary">{this.props.chosenProduct.model} דגם</p>
                            <p className="card-text-last text-secondary">מחיר קודם {`${this.props.chosenProduct.lastprice}.99₪`}</p>
                            <p className="card-text-price">{`${this.props.chosenProduct.price}.99₪`}</p>
                            <p className="card-text mb-5 ">חסכון של {`${this.props.chosenProduct.lastprice-this.props.chosenProduct.price}₪`}</p>
                            <p className="card-text mb-5 ">משלוח בתוספת תשלום</p>
                            <button className="add-to-cart-btn">הוסף לעגלה</button>
                        </div>  
                    </div>
                </div>
                <div className="row productPage-accordion">
                    <div className="productPage-accordion-line col-12 col-sm-10 px-sm-0 px-5 mx-auto my-2 d-flex flex-column">
                        <div className="productPage-accordion-line-div d-flex flex-row-reverse justify-content-between align-items-center">
                            <h1 className="productPage-accordion-line-div-title mb-0">מפרט טכני</h1>
                            <h1 onClick={this.props.openAccordion1} className="productPage-accordion-line-btn"><ion-icon name="add"></ion-icon></h1>
                        </div>
                        <div className="row productPage-accordion-line-text">
                            <div className="productPage-accordion-line-text-div col-8 ml-auto" style={{display: `${this.props.dis1}`}}>
                                היה היה פרופ' למתמטיקה )מהסוג הנדיר שקשה מאוד למצוא היום....(
                                המורה הגיע יום אחד לכיתה וראה את תלמידיו צועקים ,מתנצחים ומעליבים זה את זה.
                            </div>
                        </div>
                    </div>
                    <div className="productPage-accordion-line2 col-12 col-sm-10 px-sm-0 px-5 mx-auto d-flex flex-column">
                        <div className="productPage-accordion-line-div d-flex flex-row-reverse justify-content-between align-items-center">
                            <h1 className="productPage-accordion-line-div-title mb-0">חלקי חילוף</h1>
                            <h1 onClick={this.props.openAccordion2} className="productPage-accordion-line-btn"><ion-icon name="add"></ion-icon></h1>
                        </div>
                        <div className="row productPage-accordion-line-text">
                            <div className="productPage-accordion-line-text-div col-8 ml-auto" style={{display: `${this.props.dis2}`}}>
                                היה היה פרופ' למתמטיקה )מהסוג הנדיר שקשה מאוד למצוא היום....(
                                המורה הגיע יום אחד לכיתה וראה את תלמידיו צועקים ,מתנצחים ומעליבים זה את זה.
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
        chosenProduct: state.chosenProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAccordion1: () => dispatch(accordionToggle1()),
        openAccordion2: () => dispatch(accordionToggle2()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);