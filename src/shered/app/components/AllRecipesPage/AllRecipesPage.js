import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../../Redux/store';
import { fetchRecipes, fetchRecipesCategory, getRecipeByClick } from '../../Redux/actions';

class AllRecipes extends Component {

    componentDidMount() {
        store.dispatch(fetchRecipes());
    }

    render() {
        return (
            <div className="allRecipes">
                <div className="allRecipes__section">
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
                    <div className="allRecipes-recipesPart-rightSide">
                        <div className="allRecipes-recipesPart-rightSide-div">
                            <div className="allRecipes-recipesPart-rightSide-div-text">
                                <p onClick={this.props.fetchRecipes} id="recipes-all">כל המתכונים</p>
                                <p onClick={this.props.fetchRecipesCategory} id="recipe-vegan">טבעוניים</p>
                                <p onClick={this.props.fetchRecipesCategory} id="recipe-vegetarian">צמחוניים</p>
                                <p onClick={this.props.fetchRecipesCategory} id="recipe-meat">בשריים</p>
                            </div>
                        </div>
                    </div>
                    <div className="allRecipes-recipesPart-leftSide">
                        {
                            this.props.recipes.map(recipe => {
                                return (
                                    <Link 
                                        onClick={this.props.getRecipeByClick}
                                        key={recipe.id} 
                                        to={`recipes/${recipe.category}/${recipe.english_name.toLowerCase().replace(/\s+/g, '-')}`} 
                                        className="allRecipes-recipesPart-leftSide-imageDiv">
                                        <img src={`${recipe.image_url}`} alt={recipe.english_name.toLowerCase()} />
                                        <p>{recipe.name}</p>
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
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipes()),
        fetchRecipesCategory: (category) => dispatch(fetchRecipesCategory(category)),
        getRecipeByClick: (recipe) => dispatch(getRecipeByClick(recipe))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRecipes);