import React from 'react';
import Slider from 'react-slick';

export default function SliderBigImg() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2222,
  };

  return (
    <div className="slider">
      <div className="container">
        <Slider className="slider-big-img slick-slider" {...settings}>
          <img className="slider-big-img__item" src="images/bikes/slider-big-img-1.jpg" alt="" />
          <img className="slider-big-img__item" src="images/bikes/slider-big-img-2.jpg" alt="" />
          <img className="slider-big-img__item" src="images/bikes/slider-big-img-3.jpg" alt="" />
        </Slider>
      </div>
    </div>
  );
}
