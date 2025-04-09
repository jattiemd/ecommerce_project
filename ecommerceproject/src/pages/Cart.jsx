import { useContext } from "react"
import { CartContext } from "../contexts/cart-context"
import { Link } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";


function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className={cart ? 'mb-75': 'mb-200'}>
      <div className="flex justify-center mt-4">
        <h3 className="p-3 text-center text-4xl border-t border-b w-104">
          Shopping Cart
        </h3>
      </div>
      <div className="mt-4">
        {cart.length === 0 ? (
            <div className="p-3 text-center text-xl">
              <h5>Cart Empty</h5>
                Click <Link to={'/productCategories'} className="bg-black text-white px-2 hover:bg-white hover:text-black hover:border hover:border-gray-400">here</Link> to add some Items to your Cart
            </div>
          ) 
          : <ShoppingCart />
        }
      </div> 
    </div>
  )
}

export default Cart