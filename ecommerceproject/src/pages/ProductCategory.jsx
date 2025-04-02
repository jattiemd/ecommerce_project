import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/api";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";


function ProductCategory() {
    const params = useParams();
    const [productCategory, setProductCategory] = useState();

    useEffect(() => {
        getProductsByCategory(params.categoryName).then((data) => {
            setProductCategory(data)
        });
    }, [params.categoryName]);

		const categoryNameCapitalized = params.categoryName.charAt(0).toUpperCase() + params.categoryName.slice(1);


  return (
		<div>
			<div className="flex justify-center mt-4">
				<h3 className="p-3 text-center text-4xl border-t border-b w-104">{categoryNameCapitalized}</h3>
			</div>
			{productCategory ? (
				<div className="mt-6 mx-4 grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{productCategory.products.map(product => <ProductCard product={product} key={product.id} />)}
				</div>
			) : 
				<Loader />
			}
		</div>
  );
}

export default ProductCategory;
