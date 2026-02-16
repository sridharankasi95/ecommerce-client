import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductCard from "./ProductCard";

const products = [
  { id:1, name:"Laptop", price:500, image:"/products/product-1.jpg"},
  { id:2, name:"Phone", price:300, image:"/products/product-2.jpg"},
  { id:3, name:"Watch", price:150, image:"/products/product-3.jpg"},
  { id:4, name:"Headset", price:80, image:"/products/product-4.jpg"},
   { id:5, name:"Keyboard", price:60, image:"/products/product-1.jpg"},
    { id:6, name:"Mouse", price:40, image:"/products/product-2.jpg"},
    { id:7, name:"Speaker", price:120, image:"/products/product-3.jpg"},
    { id:8, name:"Monitor", price:200, image:"/products/product-4.jpg"},
];

const ProductSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-2xl font-semibold mb-6">Girls New Products</h2>
      <span className="text-sm text-gray-500 mb-4 block">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      <ul>
        <li>
          <button className="px-4 py-2 bg-primary-hover text-white rounded-full text-sm mr-2 mb-4">
            All
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm mr-2 mb-4">
            Clothing
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm mr-2 mb-4">
            Shoes
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm mr-2 mb-4">
            Accessories
          </button>
        </li>
      </ul>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          320:{slidesPerView:1.2},
          640:{slidesPerView:2},
          768:{slidesPerView:3},
          1024:{slidesPerView:5},
        }}
      >

        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product}/>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
};

export default ProductSlider;
