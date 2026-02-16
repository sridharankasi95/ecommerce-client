import { FaHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#f2f2f2] rounded-xl text-center cursor-pointer hover:shadow-lg transition duration-300">
      

      <div className="group relative p-4">

        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-70 w-full"
        />

        {/* Name + Price */}
        <div className="mt-4 group-hover:opacity-0 transition duration-300">
          <h3 className="font-semibold">{product.name}</h3>
          <p>${product.price}</p>
        </div>

        {/* Hover Buttons */}
        <div className="absolute inset-0 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">

          <button className="bg-primary-hover text-white px-3 py-2 rounded-full text-sm">
            Add to Cart
          </button>

          <button className="border p-2 rounded-full bg-white">
            <FaHeart className="text-red-500"/>
          </button>

          <button className="border p-2 rounded-full bg-white">
            <IoGitCompareSharp />
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;
