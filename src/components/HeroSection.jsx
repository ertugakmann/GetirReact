import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function HeroSection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className=" relative before:bg-gradient-to-r  before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:z-10">
      <Slider {...settings}>
        <img
          className="w-full h-[500px] object-cover"
          data-testid="main-image"
          src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
          alt="getir"
          shape="NORMAL"
          class="style__Image-sc-__sc-1h9bp23-0 hDQjIU"
        />

        <img
          className="w-full h-[500px] object-cover"
          data-testid="main-image"
          src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
          alt="getir"
          shape="NORMAL"
          class="style__Image-sc-__sc-1h9bp23-0 hDQjIU"
        />
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            data-testid="main-image"
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="Logo"
            shape="NORMAL"
            class="style__Image-sc-__sc-1h9bp23-0 ezAmPr"
          />
          <h3 className=" text-4xl mt-8  font-semibold text-white">
            Dakikalar içinde kapında
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color font-semibold text-center ">
            Giriş yap veya kayıt ol
          </h4>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
