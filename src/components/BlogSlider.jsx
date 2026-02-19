import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogCard from "./BlogCards.jsx";

const blogs = [
  { id: 1, name: "Donec tellus Nulla lorem", price: 500, image: "/blogs/blog-1.jpg", author: "Admin", date: "Jan 1, 2024", comments: 3 },
  { id: 2, name: "Nulla facilisi", price: 300, image: "/blogs/blog-2.jpg", author: "Admin", date: "Jan 2, 2024", comments: 5 },
  { id: 3, name: "Aliquam erat volutpat", price: 150, image: "/blogs/blog-3.jpg", author: "Admin", date: "Jan 3, 2024", comments: 2 },
  { id: 4, name: "Vestibulum ante ipsum", price: 80, image: "/blogs/blog-4.jpg", author: "Admin", date: "Jan 4, 2024", comments: 7 },
  { id: 5, name: "Sed do eiusmod tempor", price: 60, image: "/blogs/blog-5.jpg", author: "Admin", date: "Jan 5, 2024", comments: 1 },
  { id: 6, name: "Duis aute irure dolor", price: 40, image: "/blogs/blog-2.jpg", author: "Admin", date: "Jan 6, 2024", comments: 9 },
  { id: 7, name: "Lorem ipsum dolor sit", price: 120, image: "/blogs/blog-4.jpg", author: "Admin", date: "Jan 7, 2024", comments: 4 },
  { id: 8, name: "Ut enim ad minim veniam", price: 200, image: "/blogs/blog-5.jpg", author: "Admin", date: "Jan 8, 2024", comments: 6 },
];

const BlogSlider = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-2xl font-semibold mb-6">Latest Blogs</h2>
      <span className="text-sm text-gray-500 mb-4 block">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },

        }}
      >
        {blogs.map(blog => (
          <SwiperSlide key={blog.id}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSlider;