import { useContext, useEffect, useState } from "react"
import AuthContext from "../contexts/auth-context"
import { getUser } from "../services/api";

function Dashboard() {
    const { authToken } = useContext(AuthContext);
    const [ user, setUser] = useState();
    const [ order, setOrder ] = useState(JSON.parse(localStorage.getItem('order')));

    useEffect(() => {
      getUser(authToken).then((data) => {
        setUser(data);
      });
    }, [ authToken, order ]);


    return (
      <div className="mb-200">
        <div className="flex justify-center mt-4">
          <h3 className="p-3 text-center text-4xl border-t border-b w-104">
            Dashboard
          </h3>
        </div>
        <div className="sm:p-10 ">
          <table className="table-auto w-full bg-gray-50 border border-gray-200 rounded">
            <thead>
              <tr className="bg-black border border-gray-300 text-white font-semibold">
                <td>Delivery Method</td>
                <td>Products</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
                {order ? (
                  order.map(order => (
                    <tr className="border-b border-gray-300" key={order.id}>
                      <td>{order.deliveryType}</td>
                      <td>
                          {order.products.map((product) => <p key={product.id}>{product.title} - (x{product.quantity})</p>)}
                      </td>
                      <td>$ {order.total}</td>
                    </tr>
                  ))
                )
              :
                (
                  <tr>
                    <td></td>
                    <td>No orders to display</td>
                    <td></td>
                  </tr>
                )
                }
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Dashboard