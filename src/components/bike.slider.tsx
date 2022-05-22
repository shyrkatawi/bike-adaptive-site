import React from 'react';
import Slider from 'react-slick';

export default function BikeSlider() {
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
    <Slider className="bike-slider slick-slider" {...settings}>
      <img className="bike-slider__item" src="images/bikes/bike-1.jpg" alt="" />
      <img className="bike-slider__item" src="images/bikes/bike-2.jpg" alt="" />
      <img className="bike-slider__item" src="images/bikes/bike-3.jpg" alt="" />
      <img className="bike-slider__item" src="images/bikes/bike-4.jpg" alt="" />
      <img className="bike-slider__item" src="images/bikes/bike-5.jpg" alt="" />
    </Slider>
  );
}
