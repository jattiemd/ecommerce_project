import { Link } from "react-router-dom"

function OrderSummary({ cartTotal, discount, btnName, redirect, onclick }) {
    
	return (
		<div className="flex flex-col">
			<div className="bg-gray-100 border border-gray-300">
				<p className="font-semibold text-center text-xl">Order Summary</p>
			</div>
			<div className="grid grid-cols-2 p-4">
				<div className="text-left text-gray-800 text-lg">Your cart</div>
				<div className="text-right text-lg">$ {cartTotal}</div>
			</div>
			<hr className="text-gray-200"/>
			<div className="grid grid-cols-2 p-4">
				<div className="text-left text-gray-800 text-lg">Discount</div>
				<div className="text-right text-lg">-$ {(cartTotal * discount).toFixed(2)}</div>
			</div>
			<hr className="text-gray-200"/>
			<div className="grid grid-cols-2 p-4">
				<div className="text-left font-semibold text-lg">Order Total:</div>
				<div className="text-right text-lg">$ {(cartTotal - (cartTotal * discount)).toFixed(2)}</div>
			</div>
			<div className="p-2">
				<Link to={redirect}>
					<button onClick={onclick} className="flex mx-auto px-4 py-2 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-gray-400 cursor-pointer">
						{btnName}
					</button>
				</Link>
			</div>
		</div>
	)
}

export default OrderSummary