import React, { Component } from 'react';
// import { getServiceLocations } from '../../Redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductsPage extends Component {

    componentDidMount() {
    }
    render() {
        return (
            <div className="productsPage">
                <div className="productsPage__section">
                    <p className="productsPage__section-type">מוצרים</p>
                    <h1 className="productsPage__section-title"> מוצרים לפי קטגוריה</h1>
                </div>
                <div className="productsPage-main">
                    <div className="productsPage-main-shortDescription">
                        <p className="productsPage-main-shortDescription-title">
                            .המוצרים שלנו מעוצבים בקפידה על מנת לעשות לכם את החיים קלים יותר
                        </p>
                        <p className="productsPage-main-shortDescription-text">
                        עיינו במתכונים, תכננו תפריטים למסיבה, מיצאו את ההשראה לסעודת ערב ולבדוק מתכונים שיכולים לעזור לכם להפיק את המרב מהמוצרים החדשים שלכם.
                        כל מתכון שלנו נבחן בקפידה במטבח שלנו על ידי המכשירים שלנו כדי להבטיח ביצועים אופטימליים, וכמובן שגם הטעם בהתאם.
                        מתבשילי תנור איטיים לגלידת וניל קלאסית, תוכלו למצוא בדיוק את מה שאתם מחפשים כאשר אתם מחפשים מתכונים לפי הקטגוריות השונות.
                        המטבח שלנו יוצר מתכונים חדשים כל הזמן. גם למוצרים חדשים וגם בכדי לנסות לקלוע לטעם שלכם. היו הראשונים לנסות את המתכונים החדשים ביותר שלנו כאשר אתם בודקים אותנו שוב ושוב
                        </p>
                    </div>
                </div>
                <div className="allRecipes-recipesPart">
                    <div className="allRecipes-recipesPart-leftSide">
                        <Link to="/recipes/:name" className="allRecipes-recipesPart-leftSide-imageDiv">
                            <img src="https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg" alt="sdfs" />
                            <p>שייק פירות</p>
                        </Link>
                        <Link to="/recipes/:name" className="allRecipes-recipesPart-leftSide-imageDiv">
                            <img src="https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg" alt="sdfs" />
                            <p>שייק פירות</p>
                        </Link>
                        <Link to="/recipes/:name" className="allRecipes-recipesPart-leftSide-imageDiv">
                            <img src="https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg" alt="sdfs" />
                            <p>שייק פירות</p>
                        </Link>
                        <Link to="/recipes/:name" className="allRecipes-recipesPart-leftSide-imageDiv">
                            <img src="https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg" alt="sdfs" />
                            <p>שייק פירות</p>
                        </Link>
                        <Link to="/recipes/:name" className="allRecipes-recipesPart-leftSide-imageDiv">
                            <img src="https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg" alt="sdfs" />
                            <p>שייק פירות</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         serviceLocationsList: state.serviceLocationsList
//     }
// }

export default connect(null, null)(ProductsPage);