import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Title from "./Title";
import Banners from "../api/banners.json";

function Campaigns() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    arrows: false,
    autoplaySpeed: 3500,
  };

  return (
    <div className="mt-5">
      <div className="sm:container overflow-hidden md:overflow-visible mx-auto px-0">
        <h3 className="font-semibold hidden sm:block text-sm mb-4">
          Kampanyalar
        </h3>
        <Slider className="-mx-2 relative" {...settings}>
          {Banners &&
            Banners.map((banners) => (
              <div key={banners.id} className="px-2">
                <img src={banners.image} className="w-full sm:rounded-lg" />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Campaigns;
