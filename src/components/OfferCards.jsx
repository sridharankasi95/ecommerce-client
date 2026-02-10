

const OfferCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <div className="bg-[#f2f2f2] to-blue-600 text-[#003764] shadow-lg rounded-xl p-8 hover:scale-105 transition duration-300 cursor-pointer">
          <h3 className="text-2xl font-bold mb-2">
            50% Off on Laptops
          </h3>
          <p className="opacity-90">
            Get the best deals on top laptop brands.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f2f2f2] to-red-500 text-[#003764] shadow-lg rounded-xl p-8 hover:scale-105 transition duration-300 cursor-pointer">
          <h3 className="text-2xl font-bold mb-2">
            Buy One Get One Free
          </h3>
          <p className="opacity-90">
            Exclusive offer on select smartphone models.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OfferCards;
