import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { addUser } from "../services/api";

function Register() {
  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),
    email: yup.string().email().required("Please enter your email"),
    password: yup.string().min(4).required("Please enter a password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required("Confirm Password")
  });

  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (formData) => {
    addUser(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.password
    ).then(data => {
      console.log(data);
    })
    reset();
  };

  
  return (
    <div>
      <div className="flex justify-center mt-4">
        <h3 className="p-3 text-center text-4xl border-t border-b w-104">Register</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-4 mt-10">
          <div className="text-center sm:text-right text-lg">First Name: </div>
          <div className="text-center sm:text-left">
            <input type="text" className="flex mx-auto sm:mx-0 outline-none rounded-lg bg-gray-200 focus:bg-gray-100 sm:w-64" {...register("firstName")}/>
            <small className="text-red-500">{errors.firstName?.message}</small>
          </div>
          <div className="text-center sm:text-right text-lg">Last Name: </div>
          <div className="text-center sm:text-left">
            <input type="text" className="flex mx-auto sm:mx-0 outline-none rounded-lg bg-gray-200 focus:bg-gray-100 sm:w-64" {...register("lastName")}/>
            <small className="text-red-500">{errors.lastName?.message}</small>
          </div>
          <div className="text-center sm:text-right text-lg">Email: </div>
          <div className="text-center sm:text-left">
            <input type="email" className="flex mx-auto sm:mx-0 outline-none rounded-lg bg-gray-200 focus:bg-gray-100 sm:w-64" {...register("email")}/>
            <small className="text-red-500">{errors.email?.message}</small>
          </div>
          <div className="text-center sm:text-right text-lg">Password: </div>
          <div className="text-center sm:text-left">
            <input type="password" className="flex mx-auto sm:mx-0 outline-none rounded-lg bg-gray-200 focus:bg-gray-100 sm:w-64" {...register("password")}/>
            <small className="text-red-500">{errors.password?.message}</small>
          </div>
          <div className="text-center sm:text-right text-lg">Confirm Password: </div>
          <div className="text-center sm:text-left">
            <input type="password" className="flex mx-auto sm:mx-0 outline-none rounded-lg bg-gray-200 focus:bg-gray-100 sm:w-64" {...register("confirmPassword")}/>
            <small className="text-red-500">{errors.confirmPassword?.message}</small>
          </div>
        </div>
        <div className="my-6">
          <button className="flex mx-auto bg-black text-white hover:bg-white hover:text-black hover:border hover:border-gray-400 px-4 py-1 text-lg cursor-pointer">Login</button>
          <p className="text-center text-xs mt-2">
            Already a member? <Link to={"/login"} className="font-semibold underline underline-offset-2">Login Here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
  
  export default Register;
