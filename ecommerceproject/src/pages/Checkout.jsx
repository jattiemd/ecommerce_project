import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/cart-context"
import OrderSummary from "../components/OrderSummary";
import { toast } from "react-toastify";
import ToastMsg from "../components/Toast";

function Checkout() {
	const { cart, setCart, cartTotal } = useContext(CartContext);
	const [ deliveryType, setDeliveryType ] = useState('deliver');
	// const [ city, setCity] = useState('cape town');
	// const [ branch, setBranch ] = useState('central business district');
	const [ order, setOrder ] = useState(() => {
		const savedOrder = localStorage.getItem('order')
		return savedOrder ? JSON.parse(savedOrder) : [];
	});

	useEffect(() => {
		localStorage.setItem('order', JSON.stringify(order));
	}, [ order ])


	const handleDeliveryTypeChange = (e) => {
		setDeliveryType(e.target.value);
	}

	const handleCityChange = (e) => {
		setCity(e.target.value);
	}

	const handleBranchChange = (e) => {
		setBranch(e.target.value);
	}

	const handlePurchase = () => {
		localStorage.setItem('order', JSON.stringify(order));
		const newOrder = {
			orderId: cart.length+1,
			products: [
				...cart
			],
			deliveryType: deliveryType,
			total: cartTotal
		}
		setOrder(prevOrder => [...prevOrder, newOrder]);
		console.log('Before clearing cart', cart);
		localStorage.setItem('cart', JSON.stringify([]));
		setCart([])
		console.log(cart);
		toast(<ToastMsg message={"Order placed successfully!"} />);
	}


	return (
		<div className="mb-200">
			<div className="flex justify-center mt-4">
				<h3 className="p-3 text-center text-4xl border-t border-b w-104">
					Checkout
				</h3>
			</div>
			<div className="sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-6">
				<div className="sm:col-span-2 bg-gray-50 border border-gray-200 rounded">
					<div className="flex flex-col p-2 ml-2">
						<div className="text-left">
							<p className="font-semibold text-2xl">Order Details</p>
						</div>
						<div className="mt-5">
							<select value={deliveryType} onChange={(e) => handleDeliveryTypeChange(e)} className="w-84 bg-white outline outline-gray-200">
								<option value="deliver">Delivery</option>
								{/* <option value="collect">Collect</option> */}
							</select>
						</div>
						<div className="mt-5">
							{deliveryType === 'collect' ?
							<div className="p-2 grid grid-cols-2 gap-2">
								<h4 className="font-semibold my-3 col-span-2 text-center text-xl">Collection</h4>
								<div className="text-right">
									<label>City: </label>
								</div>
								<div>
									<select value={city} onChange={(e) => handleCityChange(e)} className="w-84 bg-white outline outline-gray-200">
										<option value="cape town">Cape Town</option>
										<option value="johannesburg">Johannesburg</option>
										<option value="durban">Durban</option>
									</select>
								</div>
								<div className="text-right">
									<label>Branch: </label>
								</div>
								<div>
									<select value={branch} onChange={(e) => handleBranchChange(e)} className="w-84 bg-white outline outline-gray-200">
										<option value="central business district">Central Business District</option>
										<option value="southern suburb">Southern Suburb</option>
										<option value="northern suburb">Northern Suburb</option>
									</select>
								</div>
							</div>
							: <></>
							}
						</div>
					</div>
				</div>
				<div className="sm:col-span-1 bg-gray-50 border border-gray-200 rounded">
					<OrderSummary cartTotal={cartTotal} discount={0.2} btnName={"Purchase"} redirect={'/orderSuccess'} onclick={handlePurchase}/>
				</div>
			</div>
		</div>
	)
}

export default Checkout