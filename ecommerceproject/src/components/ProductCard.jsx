import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cart-context";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product.id);
  }
  
  return (  
    <div className="p-2 border border-gray-300 hover:bg-white hover:border hover:border-gray-500 hover:shadow-xl hover:rounded-xl transition duration-300 hover:scale-101">
      <Link to={`/product/${product.id}/${product.title}`}>
        <img src={product.thumbnail} alt={product.title} className="bg-white mx-auto"></img>
        <p className="text-center">{product.title}</p>
        <div className="grid grid-cols-2 my-4">
          <div className="text-start">${product.price}</div>
          <div className="text-end">
            ⭐{product.rating}<small>/5 </small>
          </div>
        </div>
      </Link>
      <button onClick={handleAddToCart} className="cursor-pointer w-full p-2 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-gray-400">
        Add to cart
      </button>
    </div>
  )
}

export default ProductCard;
