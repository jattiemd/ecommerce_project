import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getProductCategories } from "../services/api";
import Loader from './Loader'
import AuthContext from "../contexts/auth-context";
import { CartContext } from "../contexts/cart-context";

function Navbar() {
    const [dropDown, setDropDown] = useState(false);
    const [categoryList, setCategoryList] = useState();
    const { authToken, logout } = useContext(AuthContext);
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const openDropDown = () => {
        setDropDown(true);
        getProductCategories().then((data) => setCategoryList(data));
    };

    const closeDropDown = () => {
        setDropDown(false);
    }

    const toggleDropDown = () => {
        setDropDown(!dropDown)
    }

    const handlLoginLogout = () => {
        if (authToken) {
            logout();
            window.location.reload();
        } else {
            navigate('/login');
        }
    }


    return (
        <nav className="ml-5 mr-5 p-2">
            <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="col-span-2 text-xl">
                    <Link to={'/'}>Ecommerce-Store</Link>
                </div>
                <div className="flex justify-end">
                    <span className="flex mr-5">
                        <button className="bg-black text-white px-2 cursor-pointer" onClick={handlLoginLogout}>
                            {authToken ? "Logout" : "Login"}
                        </button>
                    </span>
                        {authToken ? 
                            <span className="flex mr-5">
                                <Link to={'/dashboard'}>
                                    <img width="30" height="30" src="https://img.icons8.com/fluency-systems-filled/50/guest-male.png" alt="guest-male"/>
                                </Link>
                            </span>
                        :   
                            <></>
                        }
                    <span>
                        <Link to={'/cart'}>
                            <img width="30" height="30" src="https://img.icons8.com/dotty/80/shopping-cart.png" alt="shopping-cart"/>
                        </Link>
                    </span><sup>{cart.length == 0 ? '' : cart.length }</sup>
                </div>
            </div>    
            <div className="mt-6 flex justify-between">

                <div onMouseEnter={openDropDown} onMouseLeave={closeDropDown} onClick={toggleDropDown} className="relative">
                    <p className="hover:bg-black hover:text-white cursor-pointer text-xl">Products▿</p>
                    <div className={`bg-white border border-gray-300 py-2 absolute top-[30px] w-[300px] shadow-xl transition-all duration-300 ease-in-out ${
                        dropDown
                        ? "opacity-100 z-10" 
                        : "opacity-0 z-[-1]"
                        }`}>

                            <Link to={'/productCategories'}>
                                <div className="my-1 bg-black text-white p-2">View All Categories</div>
                            </Link>
                            <Link to={'/productList'}>
                                <div className="my-1 bg-black text-white p-2">View All Products</div>
                            </Link>

                        {categoryList 
                        ? categoryList.map((category) => (
                            <Link to={`/productCategory/${category.slug}`} key={category.slug}>
                                <div className="my-2 hover:bg-black hover:text-white transition-all hover:scale-102 p-1 hover:p-3 duration-200 ease-in-out">
                                    <p>{category.name}</p>
                                </div>
                            </Link>
                            ))
                        : <Loader />
                        }
                    </div>
                </div>

                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-0.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="ml-2 outline-none rounded-lg bg-gray-200 focus:bg-gray-100 sm:w-64 pl-2" type="text" placeholder="Search Products" />
                </div>
            </div>    
        </nav>
    )
}

export default Navbar