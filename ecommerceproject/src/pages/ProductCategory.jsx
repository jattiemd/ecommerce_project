import { useEffect, useState } from "react";
import { getProductsByCategory, sortProductsCategory } from "../services/api";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";


function ProductCategory() {
    const params = useParams();
    const [productCategory, setProductCategory] = useState();

    useEffect(() => {
        getProductsByCategory(params.categoryName).then((data) => {
            setProductCategory(data.products)
        });
    }, [params.categoryName]);

		const categoryNameCapitalized = params.categoryName.charAt(0).toUpperCase() + params.categoryName.slice(1);

	const handleFilter = () => {
		  const sort = document.querySelector("select[name='sort']").value;
		  const order = document.querySelector("select[name='order']").value;
	
		  sortProductsCategory(params.categoryName, sort, order).then((data) => {
			setProductCategory(data.products);
		  })
		}


  return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4">
				<div></div>
				<div className="p-3 text-center text-4xl border-t border-b">
					<h3>{categoryNameCapitalized}</h3>
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
			{productCategory ? (
				<div className="mt-6 mx-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
					{productCategory.map(product => <ProductCard product={product} key={product.id} />)}
				</div>
			) : 
				<Loader />
			}
		</div>
  );
}

export default ProductCategory;
