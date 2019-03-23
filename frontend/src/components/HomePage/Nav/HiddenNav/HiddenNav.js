import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDropDown, 
        fetchProductCategory, 
        closeAll, 
        toggleHiddenNav,
        logout, 
        openSignForm } from '../../../../Redux/actions';

class HiddenNav extends Component {

    componentDidMount(){
        fetchProductCategory();
    }

    render() {
        let style = {
            transition: '1s',
            transform: `translateY(${this.props.translateY})`,
            OTransition: '1s',
            MsTransform: `translateY(${this.props.translateY})`,
            WebkitTransform: `translateY(${this.props.translateY})`,
            WebkitTransition: '1s'
        }

        const userLink = (
            <span onClick={this.props.logout} id="Link4" className="hiddenNav-category6"><Link style={{color: '#0043af'}} to="/">התנתק</Link></span>
        )

        const gustLink = (
            <span onClick={this.props.openSignForm} id="Link4" className="hiddenNav-category6">התחברות/ הרשמה</span>
        )

        return (
            <div className="hiddenNav" style={style}>
    
                <span onClick={this.props.toggleDropDown} id="Link4" className="dropD hiddenNav-category4">מוצרים</span>
                <div className="hiddenNav-dropDown">
                    {
                        this.props.productsCategories.map((item,index) => {
                            return (
                                <Link onClick={this.props.closeAll} key={index} id="Link5" to={`/products/${item[0]}`}>{item[3]}</Link>
                            )
                        })   
                    }
                </div>
                <Link onClick={this.props.closeAll} id="Link4" to="/recipes" className="hiddenNav-category3">מתכונים</Link>
                <span onClick={this.props.toggleDropDown} id="Link4"  className="dropD hiddenNav-category1">תמיכה</span>
                <div className="hiddenNav-dropDown">
                    <Link onClick={this.props.closeAll} id="Link5" to="/authorized-sellers">משווקים מורשים</Link>
                    <Link onClick={this.props.closeAll} id="Link5" to="/spare-parts">אביזרים</Link>
                    <Link onClick={this.props.closeAll} id="Link5" to="/contact">צור קשר</Link>
                </div>
    
                <Link onClick={this.props.closeAll} id="Link4" to="/about" className="hiddenNav-category2">אודותינו</Link>
    
    
                
                <Link onClick={this.props.closeAll} id="Link4" to="/shopping-cart" className="hiddenNav-category5">עגלת הקניות</Link>

                { this.props.auth?userLink:gustLink }
    
                <span className="hiddenNav-categorySearch">
                    <ion-icon id="search-button-hidden" name="search"></ion-icon>
                    <input type="text" name="search" placeholder="...חפש" autoComplete="nope"/>
                </span>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        translateY: state.translateYHidden,
        auth: state.user.isAuthnticated,
        productsCategories: state.productsCategories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDropDown: (e) => dispatch(toggleDropDown(e)),
        closeAll: () => {
            return (
                dispatch(closeAll()),
                dispatch(toggleHiddenNav())
            )
        },
        logout: (e) => {
            return (
                dispatch(logout(e)),
                dispatch(closeAll()),
                dispatch(toggleHiddenNav())
            )
        },
        openSignForm: () => {
            return (
                dispatch(openSignForm()),
                dispatch(closeAll()),
                dispatch(toggleHiddenNav())
            )
        }
            
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HiddenNav);