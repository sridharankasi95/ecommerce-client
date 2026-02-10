import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const BannerSlider = () => {
  return (
    <div className="w-full h-[400px] mt-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={false}
        className="rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <img
            src="../../public/banners/banner1.jpg"
            className="w-full h-[400px] object-fit"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../public/banners/banner2.jpg"
            className="w-full h-[400px] object-fit"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="../../public/banners/banner3.jpg"
            className="w-full h-[400px] object-fit"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
