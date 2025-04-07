import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from "react-router-dom"
import * as yup from 'yup'
import { loginUser } from '../services/api';


function Login() {
  const schema = yup.object().shape({
    username: yup.string().required("Please Enter your username"),
    password: yup.string().required("Please Enter your password"),
  });

  const navigate = useNavigate();
  const {register, handleSubmit, reset, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = (formData) => {
    loginUser(formData.username, formData.password).then(data => {
      localStorage.setItem('authToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      navigate('/dashboard');
      window.location.reload();
    })
  }

  
  return (
    <div>
      <div className="flex justify-center mt-4">
				<h3 className="p-3 text-center text-4xl border-t border-b w-104">Login</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-4 mt-10">
          <div className="text-center sm:text-right text-lg">Username:</div>
          <div>
            <input type="text" className="flex mx-auto sm:mx-0 outline-none rounded-lg bg-gray-200 focus:bg-gray-100 sm:w-64" {...register("username")}/>
            <sub className='text-red-500'>{errors.username?.message}</sub>
          </div>
          <div className="text-center sm:text-right text-lg">Password:</div>
          <div>
            <input type="password" className="flex mx-auto sm:mx-0 outline-none rounded-lg bg-gray-200 focus:bg-gray-100 sm:w-64" {...register("password")}/>
            <sub className='text-red-500'>{errors.password?.message}</sub>
          </div>
        </div>
        <div className="my-6">
          <button type="submit" className="flex mx-auto bg-black text-white hover:bg-white hover:text-black hover:border hover:border-gray-400 px-4 py-1 text-lg cursor-pointer">Login</button>
          <p className="text-center text-xs mt-4">
            Not yet a member? <Link to={"/register"} className="font-semibold underline underline-offset-2">Register Here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
