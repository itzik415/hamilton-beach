import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDropDown, fetchProductCategory, closeAll, toggleHiddenNav } from '../../../../Redux/actions';

class HiddenNav extends Component {

    componentDidMount(){
        fetchProductCategory();
    }

    render() {
        let style = {
            transition: '1s',
            transform: `translateY(${this.props.translateY})`,
        }
        return (
            <div className="hiddenNav" style={style}>
    
                <span onClick={this.props.toggleDropDown} id="Link4"  className="dropD hiddenNav-category1">תמיכה</span>
                <div className="hiddenNav-dropDown">
                    <Link onClick={this.props.closeAll} id="Link5" to="/authorized-sellers">משווקים מורשים</Link>
                    <Link onClick={this.props.closeAll} id="Link5" to="/spare-parts">אביזרים</Link>
                    <Link onClick={this.props.closeAll} id="Link5" to="/contact">צור קשר</Link>
                </div>
    
                <Link onClick={this.props.closeAll} id="Link4" to="/about" className="hiddenNav-category2">אודותינו</Link>
    
                <Link onClick={this.props.closeAll} id="Link4" to="/recipes" className="hiddenNav-category3">מתכונים</Link>
    
                <span onClick={this.props.toggleDropDown} id="Link4" className="dropD hiddenNav-category4">מוצרים</span>
                <div className="hiddenNav-dropDown">
                    {
                        this.props.productsCategories.map((item,index) => {
                            return (
                                <Link onClick={this.props.closeAll} key={index} id="Link5" to={`/products/${item[0]}`}>{item[1]}</Link>
                            )
                        })   
                    }
                </div>
                
                <Link onClick={this.props.closeAll} id="Link4" to="/cart" className="hiddenNav-category5">עגלת הקניות</Link>
    
                <span className="hiddenNav-categorySearch">
                    <input type="text" name="search" placeholder="...חפש" autoComplete="nope"/>
                    <ion-icon id="search-button-hidden" name="search"></ion-icon>
                </span>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        translateY: state.translateYHidden,
        // dropDown: state.dropDown,
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
        }
            
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HiddenNav);