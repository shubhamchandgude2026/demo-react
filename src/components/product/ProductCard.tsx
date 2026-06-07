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
    <div 
      className="group relative bg-slate-900/20 hover:bg-slate-900/40 backdrop-blur-md border border-slate-900 hover:border-slate-800/80 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/[0.02] overflow-hidden"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.25rem',
        height: '100%',
        minHeight: '340px',
        boxSizing: 'border-box'
      }}
    >
      <div>
        {/* Product Image Wrapper */}
        <div className="relative w-full h-40 rounded-xl overflow-hidden bg-slate-900/80 border border-slate-800/50">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Product Header details */}
        <div 
          className="mt-4 flex flex-col gap-1"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            marginTop: '1rem'
          }}
        >
          <span className="text-[10px] uppercase font-extrabold tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/10 self-start">
            {product.category}
          </span>
          <h2 className="text-base font-bold text-slate-200 group-hover:text-white mt-1.5 transition-colors line-clamp-1">
            {product.title}
          </h2>
        </div>

        <p 
          className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed"
          style={{
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            color: '#94a3b8',
            lineHeight: '1.625'
          }}
        >
          {product.description}
        </p>
      </div>

      <div>
        <div 
          className="mt-4 pt-3 border-t border-slate-900 flex justify-between items-center"
          style={{
            marginTop: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid #0f172a',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span className="font-extrabold text-base text-slate-100">
            ${product.price}
          </span>

          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/10">
            ⭐ {product.rating}
          </span>
        </div>

        <div className="flex justify-between items-center mt-2.5">
          <span className="text-[10px] font-mono text-slate-500">
            Stock: {product.stock} items
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;