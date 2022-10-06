import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Card from "../components/Card";
import titles from "../../data/titles.json";

function Searchswiper({ search }) {
  return (
    <div className="pt-10 pl-10 ">
      <h1 className="text-slate-400">Showing search results for:"{search}"</h1>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        modules={[Pagination]}
        className="mySwiper"
      >
        {titles["movies"].map((movie) => {
          if (movie.title.toLowerCase().indexOf(search.toLowerCase()) != -1) {
            return (
              <SwiperSlide>
                <Card img={movie.img} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}

export default Searchswiper;
