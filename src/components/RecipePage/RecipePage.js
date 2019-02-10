import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeHeader from './RecipeHeader/RecipeHeader';

const recipePage = (props) => {
    return (
    <div className="recipePage">
        <RecipeHeader />
        <div className="recipePage-details">
            <img className="recipePage-details-img" src="https://images.unsplash.com/photo-1529381166273-41e795c30c7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" alt="recipe name" />
            <p className="recipePage-details-name">מיץ סחוט ירוק טבעי</p>
            <div className="recipePage-details-div">
                <div className="recipePage-details-div-rightSide">
                    <h1 className="recipePage-details-div-rightSide-title">רכיבים</h1>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">400 גרם (2 כוסות) סולת</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">360 מ”ל (½1 כוסות) מים</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">1 כפית מלח</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">1 כף שמן</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">1 ק”ג (ברוטו) דלעת, חתוכה לקוביות בגודל 3 ס”מ</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">1 בצל, קצוץ דק</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">1/2 ק”ג פטריות שמפיניון, קצוצות</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">1 כף בהראט</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">פלפל שחור גרוס</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">בצק</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">2 בצלים לבנים, קצוצים</span>
                    </label>
                    <label className="recipePage-details-div-rightSide-container">
                        <input type="checkbox"/>
                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                        <span className="recipePage-details-div-rightSide-container-ingredient">1 צרור פטרוזיליה, קצוצה</span>
                    </label>
                    <div className="recipePage-details-div-rightSide-tags">
                        <Link className="recipePage-details-div-rightSide-tags-link" to="/recipes/:type/">צמחוני</Link>
                        <Link className="recipePage-details-div-rightSide-tags-link" to="/recipes/:time/">עקרית</Link>
                        <Link className="recipePage-details-div-rightSide-tags-link" to="/recipes/:kosher/">כשר</Link>
                        <Link className="recipePage-details-div-rightSide-tags-link" to="/recipes/:level/">קל</Link>
                        <ion-icon id="tag-icon" name="pricetag"></ion-icon>
                    </div>

                </div>
                <div className="recipePage-details-div-leftSide">
                    <h1 className="recipePage-details-div-leftSide-title">הוראות הכנה</h1>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl0"/>
                        <label htmlFor="btnControl0">
                            <p className="instructions-text"><span>.1</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl1"/>
                        <label htmlFor="btnControl1">
                            <p className="instructions-text"><span>.2</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl2"/>
                        <label htmlFor="btnControl2">
                            <p className="instructions-text"><span>.3</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl3"/>
                        <label htmlFor="btnControl3">
                            <p className="instructions-text"><span>.4</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl4"/>
                        <label htmlFor="btnControl4">
                            <p className="instructions-text"><span>.5</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl5"/>
                        <label htmlFor="btnControl5">
                            <p className="instructions-text"><span>.6</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl6"/>
                        <label htmlFor="btnControl6">
                            <p className="instructions-text"><span>.7</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl7"/>
                        <label htmlFor="btnControl7">
                            <p className="instructions-text"><span>.8</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

// const mapStateToProps = state => {
//     return {
        
//     }
// }

export default connect(null, null)(recipePage);