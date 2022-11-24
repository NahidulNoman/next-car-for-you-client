import React from "react";
import banner1 from '../../../assets/banner1.jpeg';
import banner2 from '../../../assets/banner2.jpeg';

const Banner = () => {
  return (
    <div className="carousel w-full brightness-50 rounded-md mt-6">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" alt=""/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" alt=""/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
