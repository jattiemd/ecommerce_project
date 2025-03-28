import { useEffect, useState } from "react";
import { getProductCategories } from "../services/api";


function ProductCategories() {
	const [productCategories, setProductCategories ] = useState();

	useEffect(() => {
		getProductCategories().then((data) => {
			setProductCategories(data);
		});
	}, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-10">
      {productCategories &&
        productCategories.map((category) => (
          <div className="rounded-xl bg-gray-200 border border-gray-400 p-5 w-74">
            <p className="text-center text-lg">{category.name}</p>
          </div>
        ))}
    </div>
  );
}

export default ProductCategories;
