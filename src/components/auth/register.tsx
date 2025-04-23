import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1 className="text-lg p-5">Register Your Account</h1>
      <form>
        <div>
          <label htmlFor="name">Email Address: </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            required
            className="border-2 border-gray-300 w-full rounded-full p-2"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="name">User Name: </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            required
            className="border-2 border-gray-300 w-full rounded-full p-2"
            placeholder="Enter your user name"
          />
        </div>

        <div className="mt-5 relative">
          <label htmlFor="password">Password: </label>
          <br />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="border-2 border-gray-300 w-full rounded-full p-2 pr-10"
            required
            placeholder="Enter your password"
          />
          <div
            className="absolute right-3 top-10 cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="flex justify-between p-2 items-center">
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="button" className="text-blue-500 hover:underline">
            Forgot Password?
          </button>
        </div>

        <div className="flex justify-end items-center mt-5">
          <button
            type="submit"
            className="border rounded-full border-gray-300 bg-teal-600 text-white p-2 px-28"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
