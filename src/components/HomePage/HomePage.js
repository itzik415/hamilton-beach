import React, { Component } from 'react';
import Slider from './Slider/Slider';
import Trending from './Trending/Trending';
import Recipes from './Recipes/Recipes';
// import { switchingSliderAuto } from '../../Redux/actions';

class HomePage extends Component {

  componentDidMount() {
    // switchingSliderAuto();
  }

  render() {
    return (
      <div className="homePage">
        <Slider /> 
        <Trending />
        <div className="recipesLine">מתכונים</div>
        <Recipes />
      </div>
    );
  }
}

export default HomePage;
