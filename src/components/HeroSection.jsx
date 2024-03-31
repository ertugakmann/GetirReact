import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa6";

function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 3500,
  };

  return (
    <div className=" relative before:bg-gradient-to-r  before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:z-10">
      <Slider {...settings}>
        <img
          className="w-full h-[470px] object-cover"
          data-testid="main-image"
          src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
          alt="getir"
          shape="NORMAL"
          class="style__Image-sc-__sc-1h9bp23-0 hDQjIU"
        />

        <img
          className="w-full h-[470px] object-cover"
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
          <h4 className="text-primary-brand-color font-semibold text-center mb-5 ">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
              <div className="flex-1 relative">
                <input
                  placeholder="Telefon Numarası"
                  className="h-11 px-4 border-2 border-gray-200  rounded w-full transition-colors hover:border-primary-brand-color outline-none"
                />
              </div>
            </div>
            <button className="bg-brand-yellow h-12 flex items-center justify-center transition-colors  hover:bg-primary-brand-color hover:text-brand-yellow rounded-md w-full text-brand-color font-semibold">
              Telefon numarası ile devam et
            </button>
            <div className="h-[1px] bg-gray-300 my-3"></div>
            <button className="bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 h-12 flex items-center justify-center transition-colors  hover:bg-primary-brand-color hover:text-brand-yellow rounded-md w-full  font-semibold">
              <FaFacebook className="mr-2" size={18} />
              Facebook ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
