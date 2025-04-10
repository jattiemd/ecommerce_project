import { useEffect } from "react"
import { Link } from "react-router-dom";

function OrderSuccess() {
  
	return (
    <div className="mb-150">
			<div className="flex justify-center mt-4">
				<h3 className="p-3 text-center text-4xl border-t border-b w-104">
					Order Success!
				</h3>
			</div>
      <div className="grid grid-cols-2 mt-10">
				<div className="border-r border-gray-400 flex justify-center">
					<button className="text center sm:text-2xl px-4 py-2 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-gray-400 cursor-pointer">
					<Link to={'/dashboard'}>View Order</Link>
					</button>
				</div>
				<div className="flex justify-center">
					<button className="text center sm:text-2xl px-4 py-2 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-gray-400 cursor-pointer">
					<Link to={'/productCategories'}>Continue Shopping</Link>
					</button>
				</div>
			</div>
    </div>
  );
}

export default OrderSuccess