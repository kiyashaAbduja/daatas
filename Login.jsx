import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { IoEyeOff, IoEye } from "react-icons/io5";
import image from "../assets/one.png";

const LoginPage = () => {
  const [animation, setAnimation] = useState("animate-bounce");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setAnimation(""), 1000); // Remove bounce animation after 1s
    return () => clearTimeout(timer);
  }, []);

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters long"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const handleSubmit = (values) => {
    // Simulate login success
    console.log("Logged in with:", values);
    navigate("/dashboard", { state: { username: values.username } });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center bg-white">
        <img
          src={image}
          alt="Login Visual"
          className="w-3/4 h-auto object-cover"
        />
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2 bg-white shadow-lg rounded-lg">
        <div className="p-8 rounded-xl w-full max-w-md transition-transform transform">
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values);
              });
              setSubmitting(false);
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <Form
                className={`transition-transform ${animation}`}
                onSubmit={(e) => {
                  if (errors.username || errors.password) {
                    setAnimation("animate-shake");
                    setTimeout(() => setAnimation(""), 500); // Remove shake animation after 0.5s
                  }
                  handleSubmit(e);
                }}
              >
                <h2 className="text-3xl mb-6 font-bold text-center text-gray-800">
                  Login
                </h2>
                <div className="mb-6">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none  input-border-animation"
                  />
                  <ErrorMessage
                    name="username"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* <div className="mb-6 relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full p-3 border rounded-lg focus:outline-none  input-border-animation"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? <IoEye /> : <IoEyeOff />}
                  </span>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div> */}
                <div className="mb-6 relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full p-3 rounded-lg focus:outline-none input-border-animation"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? <IoEye /> : <IoEyeOff />}
                  </span>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 button-ripple"
                >
                  Login
                </button>

                {/* Examples of other buttons */}
                {/* <button className="button-pulse">Ripple Effect</button> */}
                {/* <button className="button-slide">Slide Effect</button> */}
                {/* <button className="button-bounce">Bounce Effect</button> */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
