import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const BannerSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <img
            src="/banners/banner1.jpg"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/banners/banner2.jpg"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/banners/banner3.jpg"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
