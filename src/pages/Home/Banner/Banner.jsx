import React from "react";
import banner1 from "../../../assets/banner1.jpeg";
import banner2 from "../../../assets/banner2.jpeg";

const Banner = () => {
  return (
    <div className="hero bg-white mt-10 rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" lg:w-1/2 ">
          <div className="carousel rounded-md mt-6">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={banner1} className="w-full" alt="" />
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
              <img src={banner2} className="w-full" alt="" />
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
        </div>
        <div className="lg:w-1/2 ">
          <h2 className="text-3xl lg:text-5xl font-bold mb-5">Easy And Fast Way To <br /> Buy & Sell Car On Our <br /> Platform</h2>
          <p className="text-md font-semibold">
            We will help you sell or buy your dream car here easily and quickly <br /> this is reliable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
