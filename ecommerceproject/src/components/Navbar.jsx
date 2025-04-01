import ProductNavbar from "./ProductNavbar"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav className="ml-5 mr-5 p-2">
            <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="col-span-2 text-xl">
                    <Link to={'/'}>Ecommerce-Store</Link>
                </div>
                <div className="flex justify-end">
                    <span className="flex mr-5">
                        <img width="30" height="30" src="https://img.icons8.com/fluency-systems-filled/50/guest-male.png" alt="guest-male"/>
                    </span>
                    <span>
                        <Link to={'/cart'}>
                            <img width="30" height="30" src="https://img.icons8.com/dotty/80/shopping-cart.png" alt="shopping-cart"/>
                        </Link>
                    </span>
                </div>
            </div>    
            <div className="mt-6 flex justify-between">
                <div className="text-xl">
                    <Link to={'/productCategories'}>Products<small>»</small></Link>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-0.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="ml-2 outline-none rounded-lg bg-gray-200 sm:w-64 pl-2" type="text" placeholder="Search Products" />
                </div>
            </div>    
        </nav>
    )
}

export default Navbar