import ProductCard from "./ProductCard";

const products = [
  { id:1, name:"Laptop", price:500, image:"/products/product-1.jpg"},
  { id:2, name:"Phone", price:300, image:"/products/product-2.jpg"},
  { id:3, name:"Watch", price:150, image:"/products/product-3.jpg"},
  { id:4, name:"Headset", price:80, image:"/products/product-4.jpg"},
];

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}

      </div>

    </div>
  );
};

export default ProductGrid;
