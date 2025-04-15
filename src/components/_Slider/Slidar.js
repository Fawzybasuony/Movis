import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "./Slidar.css";
import { Link } from "react-router-dom";

export default function Slidar() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results);
      });
  }, []);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {popularMovies.map((img, index) => (
          <SwiperSlide key={index}>
            <div className=" position-relative  h-100 border-0 shadow rounded overflow-hidden">
              <span
                className="position-absolute bg-primary text-bg-primary top-0 end-0 px-2 py-1"
                style={{
                  borderBottomLeftRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  zIndex: 10,
                }}
              >
                ⭐ {img.vote_average?.toFixed(1)}
              </span>

              <img
                src={`https://image.tmdb.org/t/p/w780${img?.poster_path}`}
                className="img-fluid w-100"
                style={{ height: "350px", objectFit: "cover" }}
                alt={img.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
