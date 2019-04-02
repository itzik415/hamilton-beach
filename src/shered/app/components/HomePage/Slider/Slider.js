import React from 'react';

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000" data-pause="false">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active"></div>
            <div className="carousel-item"></div>
            <div className="carousel-item"></div>
            <div className="carousel-item"></div>
            <div className="carousel-item"></div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    )
}

export default Slider;