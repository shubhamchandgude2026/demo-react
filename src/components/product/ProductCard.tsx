type Product = {
  id: number;
  title: string;
  description?: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />

      <div className="mt-3">
        <h2 className="text-lg font-semibold">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 capitalize">
          {product.category}
        </p>

        <p className="mt-2 text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3 flex justify-between items-center">
          <span className="font-bold text-lg">
            ${product.price}
          </span>

          <span>
            ⭐ {product.rating}
          </span>
        </div>

        <p className="mt-2 text-sm">
          Stock: {product.stock}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;