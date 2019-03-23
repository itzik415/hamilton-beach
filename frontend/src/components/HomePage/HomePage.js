import React, { Component } from 'react';
import Slider from './Slider/Slider';
import Trending from './Trending/Trending';
import Recipes from './Recipes/Recipes';
import Products from './Products/Products';
import { connect } from 'react-redux';
import { getSliderImages, getProducts, fetchRecipes} from '../../Redux/actions';


class HomePage extends Component {
  constructor(){
    super();
    this.state = {
        index: 1,
    }
  }

  sliderInterval = () =>{
    if(this.state.index === 5 ) {
      document.querySelector('.inner').style.marginRight = `-0%`;
      document.querySelector(`#slide${1}`).checked = true;
      this.setState({index: 0})
    }
    document.querySelector('.inner').style.marginRight = `-${this.state.index}00%`;
    document.querySelector(`#slide${this.state.index+1}`).checked = true;
    this.setState({index: this.state.index + 1})
  }

  componentDidMount() {
    this.props.dispatch(getSliderImages());
    this.props.dispatch(getProducts());
    this.props.dispatch(fetchRecipes());
    document.body.scrollTop = 0;
    this.timerID = setInterval(() => {
      this.sliderInterval()
    },4500);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  componentDidUpdate() {
    document.body.scrollTop = 0;
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