import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Card from "./Card";
import titles from "./../../data/titles.json";

function Cardslider() {
  console.log(titles["movies"]);
  return (
    <div className=" pl-10 ">
      <h1 className="text-white">Popular on Netflix</h1>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        modules={[Pagination]}
        className="mySwiper"
      >
        {titles["movies"].map((movie) => (
          <SwiperSlide>
            <Card img={movie.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Cardslider;
