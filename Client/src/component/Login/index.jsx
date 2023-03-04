import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import WelcomeImage from "../../assets/undraw_welcome_cats_thqn.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export default function Login() {
  //  declare
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // create schema for form validation
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is a required field"),
    password: yup
      .string()
      .min(4, "Password must be at least 4 characters")
      .required("Must enter password"),
  });

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // onSubmit function
  const onSubmit = ({ email, password }) => {
    setLoading(true);
    if (email == "test@gmail.com" && password == "12345") {
      navigate("/home");
    } else {
      setError("Invalid password or email id");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="md:flex min-h-full items-center my-52 justify-around py-12  sm:px-24 lg:px-8 px-16">
        <div className="sm:w-full w-0  max-w-md space-y-8">
          <img src={WelcomeImage} alt="Welcome Image" className="" />
        </div>
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="relative mt-5 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  {...register("email")}
                />
              </div>
              <p className="text-red-500 font-medium text-sm normal-case">
                {errors.email?.message}
              </p>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="relative mt-5 block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  {...register("password")}
                />
                <div>
                  <p className="text-red-500 font-medium text-sm normal-case">
                    {errors.password?.message}
                  </p>
                  <p className="text-red-500 font-medium text-sm normal-case">
                    {error}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div className="text-sm">
                <p className="font-medium   cursor-pointer">
                  Email : test@gmail.com
                </p>
                <p className="font-medium   cursor-pointer">Password : 12345</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#75337D] py-2 px-4 text-sm font-medium text-white hover:bg-[#56245b] focus:outline-none focus:ring-2 focus:ring-[#56245b] focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-[#491e4d] group-hover:text-[#883c91]"
                    aria-hidden="true"
                  />
                </span>
                {loading ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress color="inherit" size={20} />
                  </Box>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
