import React from 'react';
import { connect } from 'react-redux';

const Slider = (props) => {
    // let i = 0;
    // setInterval(function(){ 
    //     document.querySelector('.inner').style.marginLeft = `-${i}00%`;
    //     i++;
    //     document.querySelector(`#slide${i}`).checked = true;
    //     // console.log('click')
    //     if(i === 5 ) {
    //         i = 0;
    //     }
    // }, 1000);

    return (
    <div className="slider">
        <input defaultChecked type="radio" className="slider-input" name="slider" id="slide1"/>
        <input type="radio" className="slider-input" name="slider" id="slide2" />
        <input type="radio" className="slider-input" name="slider" id="slide3" />
        <input type="radio" className="slider-input" name="slider" id="slide4" />
        <input type="radio" className="slider-input" name="slider" id="slide5" />

        <div className="slider-arrows">
            <label htmlFor="slide1"></label>
            <label htmlFor="slide2"></label>
            <label htmlFor="slide3"></label>
            <label htmlFor="slide4"></label>
            <label htmlFor="slide5"></label>
        </div>

        <div className="slider-wrapper">
            <div className="inner">
                {
                    props.sliderImages.map((item) => {
                        return(
                            <article key={item.id}>
                                {/* <img src={item.imageSrc}  alt="slider company"/> */}
                                <img src={item.imageurl}  alt="slider company"/>
                            </article>
                        )
                    }) 
                }
            </div>
        </div>
        <div className="slider-dot-control">
            <label htmlFor="slide1"></label>
            <label htmlFor="slide2"></label>
            <label htmlFor="slide3"></label>
            <label htmlFor="slide4"></label>
            <label htmlFor="slide5"></label>
        </div>
    </div>

    )
}

const mapStateToProps = state => {
    return {
        sliderImages: state.sliderImages
    }
}

export default connect(mapStateToProps, null)(Slider);