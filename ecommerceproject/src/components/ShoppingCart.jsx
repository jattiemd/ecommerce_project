import { useContext} from "react"
import { CartContext } from "../contexts/cart-context"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ToastMsg from "./Toast";
import OrderSummary from "./OrderSummary";

function ShoppingCart() {
	const { cart, cartTotal, removeFromCart, updateProductQuantity } = useContext(CartContext);

	const handleQuantityChange = (productID, e) => {
		const newQuantity = parseInt(e.target.value);
		updateProductQuantity(productID, newQuantity);
	};
		

  return (
    <div>
      <div className="sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-6">
			<div className="sm:col-span-2 bg-gray-50 border border-gray-200 rounded">
				<table className="table-auto w-full">
					<thead>
						<tr className="bg-gray-100 border border-gray-300 ">
							<td className="text-center w-15 sm:w-45"></td>
							<td className="font-semibold">Product</td>
							<td className="font-semibold w-10 sm:w-20">Qty</td>
							<td className="font-semibold w-15 sm:w-20">Price</td>
							<td className="w-15 sm:w-20"></td>
						</tr>
					</thead>
					<tbody>
						{cart.map((product) => (
							product && (<tr key={product.id}>
									<td><img src={product.thumbnail} alt={product.title} className="sm:mx-auto sm:w-30 sm:h-30 w-15 h-15 object-cover"/></td>
									<td>
										<Link to={`/product/${product.id}/${product.title}`} className="hover:font-semibold ">
											{product.title}
										</Link>
									</td>
								<td>
									<select value={product.quantity} onChange={(e) => handleQuantityChange(product.id, e)} className="bg-white rounded outline outline-gray-100">
										{[...Array(10).keys()].map(i => (
											<option key={i + 1} value={i + 1}>{i + 1}</option>
										))}
									</select>
								</td>
								<td className="sm:text-left">{product.price}</td>
								<td className="text-sm sm:text-base">
									<button onClick={() => {
										removeFromCart(product.id)
										toast(<ToastMsg message={`${product.title} removed`}/>)
										}} 
										className="flex mx-auto bg-black text-white px-0.5 py-0.5 sm:px-2 hover:bg-white hover:text-black hover:border hover:border-gray-400 cursor-pointer">
											Remove
									</button>
								</td>
							</tr>
							)
						))}
					</tbody>
				</table>
			</div>
			<div className="sm:col-span-1 bg-gray-50 border border-gray-200 rounded">
				<OrderSummary cartTotal={cartTotal} discount={0.2} btnName={"Checkout"} redirect={'/checkout'} onclick={""}/>
			</div>
      </div>     
    </div>
  )
}

export default ShoppingCart