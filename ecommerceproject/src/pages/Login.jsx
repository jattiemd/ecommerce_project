import { Link } from "react-router-dom";

function Login() {
  
  return (
    <div>
      <div className="flex justify-center mt-4">
				<h3 className="p-3 text-center text-4xl border-t border-b w-104">Login</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-4 mt-10">
        <div className="text-center sm:text-right text-lg">
          Email: 
        </div>
        <div>
          <input type="email" className="flex mx-auto sm:mx-0 outline-none rounded-lg bg-gray-200 focus:bg-gray-100 sm:w-64"/>
        </div>
        <div className="text-center sm:text-right text-lg">
          Password: 
        </div>
        <div>
          <input type="password" className="flex mx-auto sm:mx-0 outline-none rounded-lg bg-gray-200 focus:bg-gray-100 sm:w-64"/>
        </div>
      </div>
      <div className="my-6">
        <button className="flex mx-auto bg-black text-white hover:bg-white hover:text-black hover:border hover:border-gray-400 px-4 py-1 text-lg cursor-pointer">Login</button>
        <p className="text-center text-xs mt-2">
          Not yet a member? <Link to={"/register"} className="font-semibold underline underline-offset-2">Register Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
