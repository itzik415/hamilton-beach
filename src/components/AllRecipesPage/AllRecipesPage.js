import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { accordionToggle1, accordionToggle2 } from '../../Redux/actions';

const allRecipes = (props) => {
    return (
        <div className="allRecipes">
            <div className="allRecipes__section">
                <p className="allRecipes__section-type">מהמטבח שלנו</p>
                <h1 className="allRecipes__section-title">מתכונים</h1>
            </div>
            <div className="allRecipes-shortDescription">
                <p className="allRecipes-shortDescription-title">
                    בשלו ארוחות בלתי נשכחות עם מתכונים מהמטבח הפרטי שלנו
                </p>
                <p className="allRecipes-shortDescription-text">
                עיינו במתכונים, תכננו תפריטים למסיבה, מיצאו את ההשראה לסעודת ערב ולבדוק מתכונים שיכולים לעזור לכם להפיק את המרב מהמוצרים החדשים שלכם.
                כל מתכון שלנו נבחן בקפידה במטבח שלנו על ידי המכשירים שלנו כדי להבטיח ביצועים אופטימליים, וכמובן שגם הטעם בהתאם.
                מתבשילי תנור איטיים לגלידת וניל קלאסית, תוכלו למצוא בדיוק את מה שאתם מחפשים כאשר אתם מחפשים מתכונים לפי הקטגוריות השונות.
                המטבח שלנו יוצר מתכונים חדשים כל הזמן. גם למוצרים חדשים וגם בכדי לנסות לקלוע לטעם שלכם. היו הראשונים לנסות את המתכונים החדשים ביותר שלנו כאשר אתם בודקים אותנו שוב ושוב
                </p>
            </div>
            <h1 className="allRecipes-filterTitle">סינון</h1>
            <div className="allRecipes-recipesPart">
                <div className="allRecipes-recipesPart-leftSide">

                </div>
                <div className="allRecipes-recipesPart-rightSide">
                    <div className="allRecipes-recipesPart-rightSide-div">
                        <div className="allRecipes-recipesPart-rightSide-div-text">
                            <Link id="recipe-type" to='/recipes/vegan'><p>טבעוניים -</p></Link>
                            <Link id="recipe-type" to='/recipes/vegetarian'><p>צמחוניים -</p></Link>
                            <Link id="recipe-type" to='/recipes/milky'><p>חלביים -</p></Link>
                            <Link id="recipe-type" to='/recipes/meaty'><p>בשריים -</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        dis1: state.accordionToggleDis1,
        dis2: state.accordionToggleDis2,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAccordion1: () => dispatch(accordionToggle1()),
        openAccordion2: () => dispatch(accordionToggle2()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(allRecipes);