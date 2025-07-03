import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../style/rest-details.css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import piza from "../../images/piza.jpg";
import noodles from "../../images/noodles.jpg";
import stew from "../../images/stew.jpg";
export const RestaurantSlider = () => {
  const imgUrls = [stew, piza, noodles];
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 1000 }}
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper"
    >
      {imgUrls?.map((url, index) => (
        <SwiperSlide key={index}>
          <Image
            src={url}
            className="slide-img"
            width={400}
            height={400}
            alt={`slide-${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
