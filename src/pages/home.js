import React, { useState, useEffect } from "react";
import axios from "axios";
import Hedar from "../components/Hedar";
import Slidar from "../components/_Slider/Slidar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Footar from "../components/Footer/Footar";
import { Link } from "react-router-dom";

export default function Home() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=8c4a17696dab522853861e576ee44805`
        );
        setData(response.data.results);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hedar />
      <Slidar />

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/Detilse/${item.id}`}>
              <div
                className="slide-container position-relative d-flex justify-content-center align-items-center"
                style={{ height: "400px" }}
              >
                <span
                  className="position-absolute bg-primary text-bg-primary top-0 end-0 px-2 py-1"
                  style={{
                    borderBottomLeftRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "14px",
                    zIndex: 10,
                  }}
                >
                  ⭐ {item.vote_average?.toFixed(1)}
                </span>

                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt={item?.original_title}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <Footar />
    </>
  );
}
