import { useEffect, useState } from "react";
import { getProductCategories } from "../services/api";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";


function ProductCategories() {
	const [productCategories, setProductCategories ] = useState();

	useEffect(() => {
		getProductCategories().then((data) => {
			setProductCategories(data);
		});
	}, []);
  

  return (
    <>
    <div className="flex justify-center mt-4">
				<h3 className="p-3 text-center text-4xl border-t border-b w-104">Categories</h3>
    </div>
    {productCategories ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-10">
        {productCategories.map(category => (
          <div className="rounded-xl bg-gray-200 border border-gray-400 p-5 w-74" key={category.slug}>
            <Link to={`/productCategory/${category.slug}`}>
              <p className="text-center text-lg">{category.name}</p>
            </Link>
          </div>
          ))
        }
      </div>
    ) : 
      <Loader />
    }
    </>
  );
}

export default ProductCategories;
