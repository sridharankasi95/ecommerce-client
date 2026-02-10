const CategorySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">YOU’LL LOVE THESE NEW STYLES</h2>
        <span className="text-gray-600 mb-6 block">Every pair of jeans needs something great to go with them. And we’ve got it all.</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          <div className="group bg-[#f2f2f2] rounded-xl text-center cursor-pointer hover:scale-105 transition duration-300">
            <img src="../../public/category/boys.jpg" alt="Boys" className="w-50 h-60 mx-auto mb-4" />
            <h3 className="text-lg font-semibold p-2 group-hover:bg-primary-hover group-hover:text-white">Boys</h3>
          </div>
          <div className="group bg-[#f2f2f2] rounded-xl text-center cursor-pointer hover:scale-105 transition duration-300">
            <img src="../../public/category/girls.jpg" alt="Girls" className="w-50 h-60 mx-auto mb-4" />
            <h3 className="text-lg font-semibold p-2 group-hover:bg-primary-hover group-hover:text-white">Girls</h3>
          </div>
          <div className="group bg-[#f2f2f2] rounded-xl text-center cursor-pointer hover:scale-105 transition duration-300">
            <img src="../../public/category/toddlerboys.jpg" alt="Toddler Boys" className="w-50 h-60 mx-auto mb-4" />
            <h3 className="text-lg font-semibold p-2 group-hover:bg-primary-hover group-hover:text-white">Toddler Boys</h3>
          </div>
          <div className="group bg-[#f2f2f2] rounded-xl text-center cursor-pointer hover:scale-105 transition duration-300">
            <img src="../../public/category/toddlergirls.jpg" alt="Toddler Girls" className="w-50 h-60 mx-auto mb-4" />
            <h3 className="text-lg font-semibold p-2 group-hover:bg-primary-hover group-hover:text-white">Toddler Girls</h3>
          </div>
        <div className="group bg-[#f2f2f2] rounded-xl text-center cursor-pointer hover:scale-105 transition duration-300">
            <img src="../../public/category/baby.jpg" alt="Baby" className="w-50 h-60 mx-auto mb-4" />
            <h3 className="text-lg font-semibold p-2 group-hover:bg-primary-hover group-hover:text-white">Baby</h3>
          </div>
        </div>
    </div>
  );
}
export default CategorySection;