const FeaturedCollection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f2f2f2] rounded-xl text-center cursor-pointer">
            <img src="../../public/featured/Featured-1.jpg" alt="Featured" className="w-96 h-70 mx-auto mb-4" />
           <span className="text-gray-600 mb-2 block uppercase">Divided.</span>
            <h3 className="text-lg font-semibold p-2 group-hover:bg-primary-hover group-hover:text-white uppercase">Reunited in style.</h3>
          </div>
          <div className="bg-[#f2f2f2] rounded-xl text-center cursor-pointer">
            <img src="../../public/featured/Featured-2.jpg" alt="Featured" className="w-96 h-70 mx-auto mb-4" />
            <span className="text-gray-600 mb-2 block uppercase">DEPTH IN DETAIL.</span>
            <h3 className="text-lg font-semibold p-2 group-hover:bg-primary-hover group-hover:text-white uppercase">SHIRTING FAVORITES</h3>
          </div>
          <div className="bg-[#f2f2f2] rounded-xl text-center cursor-pointer">
            <img src="../../public/featured/Featured-3.jpg" alt="Featured" className="w-96 h-70 mx-auto mb-4" />
            <span className="text-gray-600 mb-2 block uppercase">DEPTH IN DETAIL.</span>
            <h3 className="text-lg font-semibold p-2 group-hover:bg-primary-hover group-hover:text-white uppercase">SHIRTING FAVORITES</h3>
          </div>
        </div>
       </div>
  );
}
export default FeaturedCollection;