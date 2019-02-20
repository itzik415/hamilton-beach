import React, { Component } from 'react';
import { findSparePartEvent } from '../../Redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SpareParts extends Component {

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
                            <input 
                                onKeyPress={this.props.findSparePartEvent} 
                                className="spareParts-main-find-search-input" 
                                name="model" 
                                type="text" 
                                placeholder="...הכנס את דגם מספר הדגם של המוצר" />
                            <button onClick={this.props.findSparePartEvent} className="spareParts-main-find-search-button">
                                <ion-icon id="search-button2" name="search"></ion-icon>
                            </button>
                        </div>
                        <p className="spareParts-main-find-notFound" style={style1}>הדגם שהוכנס שגוי יש לנסות שוב</p>
                        <p className="spareParts-main-find-model">?היכן ניתן למצוא את דגם המוצר שברשותנו</p>
                    </div>
                    <div className="spareParts-main-allParts" style={style2}>
                        {
                            this.props.sparePartsByProductModel.map((part,index) => {
                                return (
                                    <Link to={`/spare-parts/${part.name}`} key={index} className="spareParts-main-allParts-sparePart">
                                        <img src={part.image_url} alt={part.hebrew_name} />
                                        <p className="spareParts-main-allParts-sparePart-name">{part.hebrew_name}</p>
                                        <p className="spareParts-main-allParts-sparePart-model">{part.part_model} # פריט</p>
                                        <p className="spareParts-main-allParts-sparePart-price">{`${part.price}₪`}</p>
                                        <button className="spareParts-main-allParts-sparePart-button">הוסף לסל</button>
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

    }
}

const mapDispatchToProps = dispatch => {
    return {
        findSparePartEvent: (e) => dispatch(findSparePartEvent(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpareParts);