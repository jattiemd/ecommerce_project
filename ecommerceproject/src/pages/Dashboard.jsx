import { useContext, useEffect, useState } from "react"
import AuthContext from "../contexts/auth-context"
import { getUser } from "../services/api";

function Dashboard() {
    const { authToken } = useContext(AuthContext);
    const [ user, setUser] = useState();

    useEffect(() => {
      getUser(authToken).then((data) => {
        setUser(data);
      });
    }, [ authToken ]);


    return (
      <div className="mb-200">
        <div className="flex justify-center mt-4">
          <h3 className="p-3 text-center text-4xl border-t border-b w-104">
            User
          </h3>
        </div>
        
      </div>
    );
}

export default Dashboard