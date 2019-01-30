import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { goToNextSlide, goToPrevSlide } from '../../../Redux/actions';
import { store } from '../../../Redux/store';

const Slider = (props) => {

    const styles = {
        transform:`translateX(${props.translateValue}px)`,
        transition: '1s',
    } 

    return (
        
        <div className="slider">
            <div className="slider-images">
                {
                    store.getState().sliderImages.map((item) => {
                        return(
                            <img id="sliderImage" style={styles} src={item.imageSrc} key={item.id} alt="slider company"/>
                        )
                    }) 
                }
            </div>
            <div className="slider-arrows">
                <i id="slider-arrows-left" onClick={props.moveToThePrevSlide} className="fas fa-angle-left"></i>
                <i id="slider-arrows-right" onClick={props.moveToTheNextSlide} className="fas fa-angle-right"></i>
            </div>
            <div className="slider-buttons">
                <span className="slider-buttons-pointer-1 activePointer"></span>
                <span className="slider-buttons-pointer-2"></span>
                <span className="slider-buttons-pointer-3"></span>
                <span className="slider-buttons-pointer-4"></span>
                <span className="slider-buttons-pointer-5"></span>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        currentIndex: state.currentIndex,
        translateValue: state.translateValue,
        sliderImages: state.sliderImages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        moveToTheNextSlide: () => dispatch(goToNextSlide()),
        moveToThePrevSlide: () => dispatch(goToPrevSlide()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);