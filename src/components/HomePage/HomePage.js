import React, { Component } from 'react';
import Slider from './Slider/Slider';
import Trending from './Trending/Trending';
import Recipes from './Recipes/Recipes';
import Products from './Products/Products';
import { connect } from 'react-redux';
import { getSliderImages } from '../../Redux/actions';


class HomePage extends Component {

  componentDidMount() {
    this.props.dispatch(getSliderImages())
  }
  
  render() {
    return (
      <div className="homePage">
        <Slider /> 
        <Trending />
        <Recipes />
        <Products />
      </div>
    );
  }
}

export default connect(null)(HomePage);