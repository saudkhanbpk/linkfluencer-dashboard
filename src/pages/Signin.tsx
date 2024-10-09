import React, { useState, useEffect, ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login, fetchUser } from '../services/userService';
import Logo from "../components/common/Logo";
import { LeftArrow } from "./../svg";
import GoogleLogo from '../assets/google_logo.png';
import FacebookLogo from '../assets/facebook_logo.png';

const Login: React.FC = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const user = await fetchUser();
      if (user) {
        navigate('/');
      }
    };

    checkUser();
  }, [navigate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(values.email, values.password);
      navigate('/');

    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials and try again.");
      console.error(error);
    }
  };

  useEffect(() => {
    setIsFormValid(values.email !== "" && values.password !== "");
  }, [values.email, values.password]);

  return (
    <div>
      <Logo />
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-4 md:p-8 bg-white rounded-lg relative">
          <div className="flex items-center md:space-x-4 mb-4 relative md:right-4">
            <button onClick={() => navigate("/")} className="text-lg relative bottom-3 hidden md:flex">
              <LeftArrow className="size-10 border p-2 rounded-full border-[#113E53] absolute right-0 bottom-0 bg-[#59FF93] hover:rotate-45 duration-150" onClick={undefined} />
            </button>
            <div>
              <h1 className="text-4xl font-semibold text-navy">Log In</h1>
              <p className="text-xl mt-2 text-gray-600">
                Welcome back! Log in to access your account.
              </p>
            </div>
          </div>

          <form className="space-y-4" autoComplete="off" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
              name="email"
              id="email"
              className="p-3 rounded-full border border-gray-500 w-full focus:outline-none focus:ring-2"
              aria-label="Email"
              required
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              value={values.password}
              onChange={handleChange}
              name="password"
              id="password"
              className="p-3 rounded-full border border-gray-500 w-full focus:outline-none focus:ring-2"
              aria-label="Password"
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 scale-150"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  aria-label="Remember Me"
                />
                Remember Me
              </label>
              <button
                onClick={() => navigate("/forget-password")}
                className="text-navy hover:underline cursor-pointer text-[16px] font-[400] underline bg-transparent border-none p-0"
              >
                Forgot Password?
              </button>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className={`w-full p-3 rounded-full focus:outline-none ${isFormValid ? "bg-[#020D3A] text-white" : "bg-slate-500 text-white"} cursor-pointer`}
              disabled={!isFormValid}
            >
              Log In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-navy cursor-pointer font-semibold hover:underline bg-transparent border-none p-0"
            >
              Sign Up
            </button>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center mt-[32px] gap-4">
            <button className="flex w-full gap-2 justify-center xs:mb-0 py-3 px-8 bg-white border border-[#113E53] rounded-full shadow-sm hover:shadow-md">
              <img
                src={GoogleLogo}
                alt="Google"
                width={20}
                height={20}
              />
              <span className="font-bold">Google</span>
            </button>
            <button className="flex w-full justify-center gap-2 p-3 px-8 bg-white border border-[#113E53] rounded-full shadow-sm hover:shadow-md">
              <img
                src={FacebookLogo}
                alt="Facebook"
                width={20}
                height={20}
              />
              <span className="font-bold">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
