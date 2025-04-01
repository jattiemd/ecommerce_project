import { useParams } from "react-router-dom"
import { getProduct, loader } from "../services/api";
import { useEffect, useState } from "react";
import Accordian from "../components/Accordian";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState();
    
    useEffect(() => {
      getProduct(params.productID).then(data => {
        setProduct(data);
      })
    }, [params.productID])
    
    console.log(product && product);

    return (
      <div>
        {product ? (
          <>
            <div className="flex justify-center mt-4">
              <h3 className="p-3 text-center text-4xl border-t border-b w-104">{product.title}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 p-2 mt-6 gap-3">
              <div>
                <img src={product.images[0]} className="mt-10 h-120 w-120 mx-auto" alt={product.title} />
              </div>
              <div>
                <div className="flex justify-center mt-8">
                  <button className="cursor-pointer w-[100%] p-2 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-gray-400 text-xl">
                    Add to cart
                  </button>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2">
                    <div>
                      <p className="text-2xl font-bold">${product.price}</p>
                      <p className="text-gray-600">{product.availabilityStatus} <small>({product.stock})</small></p>
                    </div>
                    <div className="text-end">
                      <p className="text-gray-600 text-2xl">⭐{product.rating}<small>/5</small></p>
                      <p className="text-gray-600"><small>reviews({product.reviews.length})</small></p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Accordian title={"Description"} content={product.description} open={true} />
                  <Accordian title={"Dimensions"}
                    content={
                      <>
                      <p>Width: {product.dimensions.width}<small>cm</small></p>
                      <p>Height: {product.dimensions.height}<small>cm</small></p>
                      <p>Depth: {product.dimensions.depth}<small>cm</small></p>
                      </>
                    }
                    open={false}
                  />
                  <Accordian title={"Deliver & Returns"} 
                    content={
                      <>
                      <p className="font-semibold text-gray-600">Delivery: {product.shippingInformation}</p>
                      <p className="font-semibold text-gray-600">Returns: {product.returnPolicy}</p>
                      <p className="font-semibold text-gray-600">Warranty: {product.warrantyInformation}</p>
                      </>
                    }
                  />
                </div>

              </div>
            </div>
          </>
        ) : (
          loader
        )}
      </div>
    );
}

export default Product