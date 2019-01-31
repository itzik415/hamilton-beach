import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeHeader from './RecipeHeader/RecipeHeader';

const recipePage = (props) => {
    return (
    <div className="recipePage">
        <RecipeHeader />
        <div className="recipePage-details">
            <img className="recipePage-details-img" src="https://static.hashulchan.co.il/www/uploads/2015/11/500_650124.jpg" alt="recipe name" />
            <p className="recipePage-details-name">קובה במיה טבעונית</p>
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
                        <label for="btnControl0">
                            <p><span>.1</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl1"/>
                        <label for="btnControl1">
                            <p><span>.2</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl2"/>
                        <label for="btnControl2">
                            <p><span>.3</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl3"/>
                        <label for="btnControl3">
                            <p><span>.4</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl4"/>
                        <label for="btnControl4">
                            <p><span>.5</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl5"/>
                        <label for="btnControl5">
                            <p><span>.6</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl6"/>
                        <label for="btnControl6">
                            <p><span>.7</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                        </label>
                    </div>
                    <div className="recipePage-details-div-leftSide-instructions">
                        <input type="checkbox" id="btnControl7"/>
                        <label for="btnControl7">
                            <p><span>.8</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
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