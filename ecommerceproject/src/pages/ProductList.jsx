import { useEffect, useState } from "react"
import { getProduts } from "../services/api"
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";


function ProductList() {
    const [products, setProducts] = useState();

    useEffect(() => {
        getProduts().then((data) => {
            setProducts(data.products);
        })
    })

    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4">
          <div></div>
          <div className="p-3 text-center text-4xl border-t border-b">
            <h3>All Products</h3>
          </div>
          <div className="flex justify-between sm:justify-end mr-5 p-4 sm:p-0">
            <select className="mr-5 border-t border-b w-fit">
              <option defaultValue>Sort</option>
              <option value={"name"}>Name</option>
              <option value={"rating"}>Rating</option>
            </select>
            <select className="mr-5 border-t border-b w-fit">
              <option defaultValue>Order</option>
              <option value={"name"}>Ascending</option>
              <option value={"rating"}>Descending</option>
            </select>
            <button className="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-gray-400 px-2 cursor-pointer">Apply</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-10">
          {products ? (
            products.map((product) => <ProductCard product={product} />)
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
}

export default ProductList