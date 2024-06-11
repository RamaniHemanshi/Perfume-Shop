import React, { useEffect, useRef, useState } from "react";
import data from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import "./Blog.css";
import Slider from "react-slick";

const Blog = () => {
  const [randomizedDestinations, setRandomizedDestinations] = useState([]);

  useEffect(() => {
    setRandomizedDestinations([...data]);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dotsClass: `slick-dots custom-dots`,
  };

  console.log("randomizedDestinations", randomizedDestinations);
  return (
    <>
      <div className="mx-36 max-w-[1400px] py-10 md:px-6 mt-10 ">
        <div className="flex">
          <div className="mxd:w-1/2 w-full" id="destination_container">
            <Slider {...settings}>
              {randomizedDestinations.slice(0, 10).map((location, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 relative group focus-visible:outline-none"
                  >
                    <img
                      key={index}
                      src={location.image}
                      alt="image"
                      className="w-full h-80 mx-2 rounded-lg"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3 m-2 relative group">
            <img
              src="/images/blog/b11.jpg"
              alt="images"
              className="w-[424px] h-[318px] m-2 rounded-lg"
            />
            {/* <div className="absolute bottom-4 left-3 p-4">
              <p className="text-white">Space For everyone</p>
              <p className="text-white">More than 3 bedrooms</p>
            </div> */}
          </div>
          <div className="w-1/3 m-2 relative group">
            <img
              src="/images/blog/b12.jpg"
              alt="images"
              className="w-[424px] h-[318px] m-2 rounded-lg"
            />
            {/* <div className="absolute bottom-4 left-3 p-4">
              <p className="text-white">Fun in the sun</p>
              <p className="text-white">Pools and hot tubs</p> */}
            {/* </div> */}
          </div>
          <div className="w-1/3 m-2 relative group">
            <img
              src="/images/blog/b13.jpg"
              alt="images"
              className="w-[424px] h-[318px] m-2 rounded-lg"
            />
            {/* <div className="absolute bottom-4 left-3 p-4">
              <p className="text-white">Fun in the sun</p>
              <p className="text-white">Pools and hot tubs</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
