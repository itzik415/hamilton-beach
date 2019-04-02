import React, { Component } from 'react';
import ProductHeader from '../ProductPage/ProductHeader/ProductHeader';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../../Redux/store';
import { accordionToggle1, 
         accordionToggle2, 
         productHandle, 
         fetchSparePartsByProductModel, 
         getPartByClick,
         featuresHandle,
         openingForm } from '../../Redux/actions';

class ProductPage extends Component {
    constructor(props) {
        super();
    
        this.state = {
          loading: 'initial',
          data: ''
        };
    
      }
    
      loadData() {
        var promise = new Promise((resolve, reject) => { 
          setTimeout(() => {
            resolve('This is my data.');
          }, 500);
        });
    
    
        return promise;
      }

        
    componentDidMount() {
        productHandle();
        store.dispatch(fetchSparePartsByProductModel());
        featuresHandle();

        this.setState({ loading: 'true' });
        this.loadData()
            .then((data) => {
                this.setState({
                    data: data,
                    loading: 'false'
                });
        });
    }
    
    render() {
        if (this.state.loading === 'initial') {
            return <h2>Intializing...</h2>;
        }

        if (this.state.loading === 'true') {
            return <h2>Loading...</h2>;
        }


        return (
            <div className="productPage row">
                <ProductHeader 
                    title={this.props.chosenProduct[0].type} 
                    price={this.props.chosenProduct[0].price} 
                    model={this.props.chosenProduct[0].model}/>
                <div className="productPage-main row col-12">
                    <div className="col-0 col-lg-2 col-xl-2"></div>
                    <div className="sliderr my-5 col-12 col-md-12 col-lg-6 col-xl-5 d-flex align-items-center">
                        {
                            this.props.productsImages.map((item,index) => {
                                return(
                                    <input key={index} type="radio" className="sliderr-input" name="sliderr" id={`slide${index+1}`} />
                                )
                            }) 
                        }
                        <div className="sliderr-wrapperr">
                            <div className="innerr">
                                {
                                    this.props.productsImages.map((item,index) => {
                                        return(
                                            <article className="article" key={item.id}>
                                                <img 
                                                    className="mb-5" src={`https://storage.googleapis.com/hamilton-beach-israel/hamilton-beach-images/${item.model.slice(0,5)}/${item.model.slice(0,5)}-${index+1}.jpg`} 
                                                    alt={`${item.model}`}/>
                                            </article>
                                        )
                                    }) 
                                }
                            </div>
                        </div>
                        <div className="sliderr-dot-controll">
                            {
                                this.props.productsImages.map((item,index) => {
                                    return(
                                        <label htmlFor={`slide${index+1}`} key={index}></label>
                                    )
                                }) 
                            }
                        </div>
                    </div>
                    <div className="productPage-main-cards col-12 col-lg-4 col-xl-5 col-sm-10">
                        <h1 className="productPage-main-cards-title">המילטון ביץ׳ - {this.props.chosenProduct[0].type} </h1>
                        <h5 className="productPage-main-cards-description">{this.props.chosenProduct[0].short_description}</h5>
                        <a className="productPage-main-cards-instructions" target="_blank" rel="noopener noreferrer" href={`https://storage.googleapis.com/hamilton-beach-israel/hamilton-beach-instruction-manual/${this.props.chosenProduct[0].model}.pdf`}><p>הוראות שימוש</p></a>
                        <p className="productPage-main-cards-model">דגם {this.props.chosenProduct[0].model}</p>
                        <p className="productPage-main-cards-last">מחיר קודם {`${this.props.chosenProduct[0].last_price}₪`}</p>
                        <p className="productPage-main-cards-price">{`${this.props.chosenProduct[0].price}₪`}</p>
                        <p className="productPage-main-cards-save">חסכון של {`${this.props.chosenProduct[0].last_price-this.props.chosenProduct[0].price}₪`}</p>
                        <p className="productPage-main-cards-delivery">משלוח בתוספת תשלום</p>
                        <button 
                            onClick={openingForm} 
                            id={this.props.chosenProduct[0].model} 
                            value={this.props.chosenProduct[0].category} 
                            name={this.props.chosenProduct[0].serial}
                            className="add-to-cart-btn">הוסף לעגלה</button>
                    </div>
                </div>
                <div className="row productPage-accordion">
                    <div className="productPage-accordion-line col-12 px-5 mx-auto my-2 d-flex flex-column">
                        <div className="productPage-accordion-line-div d-flex flex-row-reverse justify-content-between align-items-center">
                            <h1 onClick={this.props.openAccordion1} className="productPage-accordion-line-btn"><ion-icon name="add"></ion-icon></h1>
                            <h1 className="productPage-accordion-line-div-title mb-0">מפרט טכני</h1>
                        </div>
                        <div className="row productPage-accordion-line-text">
                            <div className="productPage-accordion-line-text-div1 col-12" style={{display: `${this.props.dis1}`}}>
                                {
                                    this.props.chosenProductFeatures.map((item,index) => {
                                        return (
                                            <p key={index}>- {item.feature}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="productPage-accordion-line2 col-12 px-5 mx-auto d-flex flex-column">
                        <div className="productPage-accordion-line2-div d-flex flex-row-reverse justify-content-between align-items-center">
                            <h1 onClick={this.props.openAccordion2} className="productPage-accordion-line-btn"><ion-icon name="add"></ion-icon></h1>
                            <h1 className="productPage-accordion-line2-div-title mb-0">חלקי חילוף</h1>
                        </div>
                        <div className="productPage-accordion-line2-text" style={{display: `${this.props.dis2}`}} >
                            <div className="productPage-accordion-line2-text-div2">
                                {
                                    this.props.sparePartsByProductModel.map((part, index) => {
                                        return (
                                            <Link to={`/spare-parts/${part.product_model}/${part.part_model}`} key={index} className="productPage-accordion-line2-text-div2-sparePart">
                                                <img onClick={this.props.getPartByClick} src={part.image_url} alt={part.hebrew_name} />
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
        sparePartsByProductModel: state.sparePartsByProductModel,
        chosenProductFeatures: state.chosenProductFeatures
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAccordion1: () => dispatch(accordionToggle1()),
        openAccordion2: () => dispatch(accordionToggle2()),
        getPartByClick: (e) => dispatch(getPartByClick(e)),
        productHandle: () => dispatch(productHandle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);