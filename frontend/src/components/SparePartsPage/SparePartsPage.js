import React, { Component } from 'react';
import { findSparePartEvent, getProducts, openingForm } from '../../Redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../../Redux/store';

class SpareParts extends Component {

    componentDidMount() {
        store.dispatch(getProducts());
    }

    render() {
        const style1 = {
            display: `${this.props.situationDisplay}`
        }

        const style2 = {
            display: `${this.props.partsGridDisplay}`
        }
        return (
            <div className="spareParts">
                <div className="spareParts__section">
                    <p className="spareParts__section-type">תמיכה</p>
                    <h1 className="spareParts__section-title">חלקי חילוף ואביזרים</h1>
                </div>
                <div className="spareParts-main">
                    <div className="spareParts-main-shortDescription">
                        <p className="spareParts-main-shortDescription-title">
                            שימרו על מוצרי ההמילטון ביץ׳ שלכם עובדים ביעילות עם חלקים, מסננים ואביזרים נלווים   
                        </p>
                        <p className="spareParts-main-shortDescription-text">
                            אם אינכם יכולים למצוא את החלק החלופי או את האביזר הדרוש לכם באזור זה, אנא התקשרו למוקד הטלפוני בטלפון 09-7409836. לאנשי המקצוע שלנו יש גישה למגוון רחב של חלקים ואביזרים ותמיד ישמחו לסייע לכם
                        </p>
                    </div>
                    <div className="spareParts-main-find">
                        <p className="spareParts-main-find-title">הכנס מספר דגם</p>
                        <div className="spareParts-main-find-search">
                            <button onClick={this.props.findSparePartEvent} name="search" className="spareParts-main-find-search-button">
                                <span>&#x1F50D;</span>
                            </button>
                            <input 
                                onKeyPress={this.props.findSparePartEvent} 
                                className="spareParts-main-find-search-input" 
                                name="model" 
                                type="text" 
                                placeholder="...הכנס את מספר הדגם של המוצר" />
                        </div>
                        <p className="spareParts-main-find-notFound" style={style1}>הדגם שהוכנס שגוי יש לנסות שוב</p>
                        <p className="spareParts-main-find-model" data-toggle="modal" data-target="#exampleModal">?היכן ניתן למצוא את דגם המוצר שלכם</p>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close mr-auto ml-0" data-dismiss="modal" aria-label="Close">
                                            <span className="h1" aria-hidden="true">&times;</span>
                                        </button>
                                        <h3 className="modal-title" id="exampleModalLabel">ניתן למצוא מדבקה זו בתחתית המוצר</h3>
                                    </div>
                                    <div className="modal-body">
                                        <img style={{width: '100%'}} src={require('../../images/sticker-model.png')} alt="מדבקת מוצר"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        {
                            this.props.chosenProduct.map((item,index) => {
                                return (
                                    <div className="spareParts-main-product" key={index} >
                                        <img className="spareParts-main-product-img" src={item.image_url} alt={item.hebrew_name} />
                                        <div className="spareParts-main-product-rightDiv">
                                            <p className="spareParts-main-product-rightDiv-title">חלקים עבור:</p>
                                            <p className="spareParts-main-product-rightDiv-description">{item.short_description}</p>
                                            <p className="spareParts-main-product-rightDiv-model">{item.model}</p>
                                            <Link to={`/products/${item.category}/${item.model}`}className="spareParts-main-product-rightDiv-link">{`לחץ לפרטים נוספים >>`}</Link>
                                        </div>
                                    </div>
                                    
                                )
                            })
                        }
                    <div className="spareParts-main-allParts" style={style2}>
                        {
                            this.props.sparePartsByProductModel.map((part,index) => {
                                return (
                                    <Link to={`/spare-parts/${part.product_model}/${part.part_model}`} key={index} className="spareParts-main-allParts-sparePart">
                                        <img src={part.image_url} alt={part.hebrew_name} />
                                        <p className="spareParts-main-allParts-sparePart-name">{part.hebrew_name}</p>
                                        <p className="spareParts-main-allParts-sparePart-model">פריט {part.part_model}#</p>
                                        <p className="spareParts-main-allParts-sparePart-price">{`${part.price}₪`}</p>
                                        <button onClick={openingForm} name={part.part_model} id={part.product_model} value={part.part_model} className="spareParts-main-allParts-sparePart-button">הוסף לסל</button>
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
        sparePartsByProductModel: state.sparePartsPage.sparePartsByProductModel,
        situationDisplay: state.sparePartsPage.situationDisplay,
        partsGridDisplay: state.sparePartsPage.partsGridDisplay,
        chosenProduct: state.chosenProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        findSparePartEvent: (e) => dispatch(findSparePartEvent(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpareParts);