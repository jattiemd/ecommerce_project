import { useEffect, useState, useCallback } from "react"
import { getProducts, sortProducts } from "../services/api"
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useInView } from 'react-intersection-observer'


function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [ref, inView] = useInView()

    // Lazy Loading implementation
    const fetchData = useCallback(async () => {
      if (!inView || isLoading || !hasMoreData) return;
      
      setIsLoading(true);
      const limit = 20;
      const skip = (page - 1) * limit;
      
      getProducts(limit, skip).then((newData) => {
        if (newData.products.length === 0) {          //If no more data is available
          setHasMoreData(false);
          setIsLoading(false);
          return;
        }
        
        setProducts(prevProducts => [...prevProducts, ...newData.products]);
        setPage(prevPage => prevPage + 1);
      })
      
      setIsLoading(false);
      
    }, [inView, isLoading, page, hasMoreData]);
    
    useEffect(() => {
      fetchData()
    }, [fetchData]);

    const handleFilter = () => {
      const sort = document.querySelector("select[name='sort']").value;
      const order = document.querySelector("select[name='order']").value;

      sortProducts(sort, order).then((data) => {
        setProducts(data.products);
      })
    }


    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4">
          <div></div>
          <div className="p-3 text-center text-4xl border-t border-b">
            <h3>All Products</h3>
          </div>
          <div className="flex justify-between sm:justify-end mr-5 p-4 sm:p-0">
            <select name="sort" className="mr-5 border-t border-b w-fit">
              <option defaultValue value={"title"}>Sort</option>
              <option value={"title"}>Name</option>
              <option value={"rating"}>Rating</option>
            </select>
            <select name="order" className="mr-5 border-t border-b w-fit">
              <option defaultValue value={"asc"}>Order</option>
              <option value={"asc"}>Ascending</option>
              <option value={"desc"}>Descending</option>
            </select>
            <button onClick={handleFilter} className="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-gray-400 px-2 cursor-pointer">
              Apply Filter
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-10">
          {products && products.map((product) => <ProductCard product={product} key={product.id}/>)}
          {isLoading && products.length > 0 && <Loader />}
          
          <div ref={ref} className="h-[60px]"></div>
        </div>
      </div>
    );
}

export default ProductList