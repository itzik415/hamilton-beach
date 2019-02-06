import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDropDown } from '../../../../Redux/actions';

const hiddenNav = (props) => {
    let style = {
        transition: '1s',
        transform: `translateY(${props.translateY})`,
    }
    const style2 = {
        display: `${props.dropDown}`
    }

    return (
        <div className="hiddenNav" style={style}>

            <span onClick={props.toggleDropDown} id="Link4"  className="hiddenNav-category1">תמיכה</span>
            <div className="hiddenNav-dropDown" style={style2}>
                <Link id="Link5" to="/authorized-sellers">משווקים מורשים</Link>
                <Link id="Link5" to="/spare-parts">אביזרים</Link>
                <Link id="Link5" to="/contact">צור קשר</Link>
            </div>

            <Link id="Link4" to="/about" className="hiddenNav-category2">אודותינו</Link>

            <span onClick={props.toggleDropDown} id="Link4" to="/recipes" className="hiddenNav-category3">מתכונים</span>
            <div className="hiddenNav-dropDown" style={style2}>
                <Link id="Link5" to="/recipes/vegan">טבעוניים</Link>
                <Link id="Link5" to="/recipes/vegetarian">צמחוניים</Link>
                <Link id="Link5" to="/recipes/milky">חלביים</Link>
                <Link id="Link5" to="/recipes/meaty">בשריים</Link>
            </div>

            <span id="Link4" className="hiddenNav-category4">מוצרים</span>
            <div className="hiddenNav-dropDown">
                <Link id="Link5" to="/products/blenders">בלנדרים</Link>
                <Link id="Link5" to="/products/waffle-makers">וופל מייקר</Link>
                <Link id="Link5" to="/products/toasters">טוסטרים</Link>
                <Link id="Link5" to="/products/multicookers">מולטי קוקר</Link>
                <Link id="Link5" to="/products/grinders">מטחנות קפה ותבלינים</Link>
                <Link id="Link5" to="/products/juicers">מסחטות מיצים</Link>
                <Link id="Link5" to="/products/food-processors">מעבדי מזון</Link>
            </div>
            
            <Link id="Link4" to="/cart" className="hiddenNav-category5">עגלת הקניות</Link>

            <span className="hiddenNav-categorySearch">
                <input type="text" name="search" placeholder="...חפש" autoComplete="nope"/>
                <ion-icon id="search-button-hidden" name="search"></ion-icon>
            </span>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        translateY: state.translateYHidden,
        dropDown: state.dropDown,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDropDown: () => dispatch(toggleDropDown()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(hiddenNav);