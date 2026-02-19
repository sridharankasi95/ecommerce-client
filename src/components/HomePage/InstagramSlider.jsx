import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import InstagramCard from "../InstagramCard";

const instagrams = [
  { id: 1, name: "Donec tellus Nulla lorem", image: "/blogs/blog-1.jpg" },
  { id: 2, name: "Nulla facilisi", image: "/blogs/blog-2.jpg" },
  { id: 3, name: "Aliquam erat volutpat", image: "/blogs/blog-3.jpg" },
  { id: 4, name: "Vestibulum ante ipsum", image: "/blogs/blog-4.jpg" },
  { id: 5, name: "Sed do eiusmod tempor", image: "/blogs/blog-5.jpg" },
  { id: 6, name: "Duis aute irure dolor", image: "/blogs/blog-2.jpg" },
  { id: 7, name: "Lorem ipsum dolor sit", image: "/blogs/blog-4.jpg" },
  { id: 8, name: "Ut enim ad minim veniam", image: "/blogs/blog-5.jpg" },
];

const InstagramSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-2xl font-semibold mb-6">Instagram</h2>
      <span className="text-sm text-gray-500 mb-4 block">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      <Swiper
        spaceBetween={5}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.3 },
          960: { slidesPerView: 3.4 },
          1200: { slidesPerView: 4.5 },
          1500: { slidesPerView: 5.6 },
          1800: { slidesPerView: 6.7 },
        }}
      >
        {instagrams.map(instagram => (
          <SwiperSlide key={instagram.id}>
            <InstagramCard instagram={instagram} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}
export default InstagramSlider;