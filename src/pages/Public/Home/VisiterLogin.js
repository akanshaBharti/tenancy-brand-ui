import DialogBox from 'components/DialogBox'
import InputField from 'components/InputFields/inputField'
import logo from "assets/image/Title/Logo.svg";
import React, { useContext, useEffect, useState } from 'react'
import YellowButton from 'components/Button/YellowButton';
import { Link } from 'react-router-dom';
import usePostLogin from '../data/usePostLogin';
import { showErrorToast, showSuccessToast } from 'components/toaster/toastHelper';
import { AuthStateContext } from 'App';

const VisiterLogin = ({setIsOpenLoginDilog,isOpenLoginDilog}) => {
  const [postLoginData, postLoginError, , postLogin] =
  usePostLogin();

  const { setIsAuthenticated } = useContext(AuthStateContext);

  useEffect(()=>{
    if(postLoginData?.data?.user?.user_type === null){
      showSuccessToast("Login Successfull")
    }
    if(postLoginError){
      showErrorToast("Error while doing login")
    }
  },[postLoginData, postLoginError])
  useEffect(()=>{
    if(postLoginData?.data){
      if(postLoginData?.data?.user?.user_type === 1 || postLoginData?.data?.user?.user_type === 2 ){
        showErrorToast("Login as tenant/owner")
      }else{
        console.log(postLoginData)
        localStorage.setItem("expiry",postLoginData?.data?.expiry)
        localStorage.setItem("token",postLoginData?.data?.token)
        localStorage.setItem("user", JSON.stringify(postLoginData?.data?.user))
        setIsAuthenticated(true)
        setIsOpenLoginDilog(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[postLoginData])
  const [loginForm, setLoginForm] = useState({
    mobile_number:"",
    password:""
  })

  const [errors, setErrors] = useState({})

    // Validation function
    const validateForm = () => {
      const newErrors = {};
      
      // Check if the mobile_number is either a phone number or an email
      const mobileOrEmailRegex = /^[6-9]\d{9}$/; // Mobile number regex
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Email regex
  
      if (!loginForm.mobile_number.trim()) {
        newErrors.mobile_number = "Mobile number or Email is required";
      } else if (!mobileOrEmailRegex.test(loginForm.mobile_number) && !emailRegex.test(loginForm.mobile_number)) {
        newErrors.mobile_number = "Invalid mobile number or email";
      }
  
      if (!loginForm.password) {
        newErrors.password = "Password is required";
      } else if (loginForm.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

      // Handle input change
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({ ...prev, [name]: value }));
      };

      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log(loginForm);
          postLogin(loginForm)
          // Perform login action (API call, etc.)
        }
      };


    const handleOpenContent=()=>{
        return(
            <>
            <div className="px-[15px]">
              <div className="flex flex-col items-center gap-2">
                <img src={logo} alt="logo" width="230px" />
              </div>
              <div className='flex justify-center items-center mt-2'>
                  <p className='m-0 text-[#111827] font-[400]'>Login</p>
              </div>
              <div className="mt-2">
                <div className="w-[100%] flex flex-col group mt-2">
                  <label className="font-[500] text-[#111827] text-[0.75rem]">
                    Email or Phone
                  </label>
                  <InputField
                    type="text"
                    className="border-[1px] border-[#D0D5DD] rounded-md bg-white text-[0.9rem] w-[100%] p-[0.4rem] focus:outline-none"
                    placeholder={"Enter Your Email"}
                    value={loginForm.mobile_number}
                    onChange={handleInputChange}
                    name="mobile_number"
                  />
                {errors.mobile_number && (
                  <p className="text-red-500 text-[0.75rem]">
                    {errors.mobile_number}
                  </p>
                )}
                </div>
                <div className="w-[100%] flex flex-col mt-2 group">
                  <label className="font-[500] text-[#111827] text-[0.75rem]">
                    Password
                  </label>
                  <InputField
                    type="password"
                    className="border-[1px] border-[#D0D5DD] rounded-md bg-white text-[0.9rem] w-[100%] p-[0.4rem] focus:outline-none"
                    placeholder={"Enter Your Password"}
                    value={loginForm.password}
                    onChange={handleInputChange}
                    name="password"
                  />
                {errors.password && (
                  <p className="text-red-500 text-[0.75rem]">
                    {errors.password}
                  </p>
                )}
                </div>
                <div className="mt-4 flex flex-col gap-2.5">
                  <YellowButton
                    name="Log In"
                    px={"px-[1.5rem]"}
                    py={"py-[0.5rem]"}
                    rounded={"rounded-md"}
                    onClick={handleSubmit}
                    // onClick={handleOpenOtp}
                  />
                  <button className="px-[1.5rem] py-[0.5rem] rounded-md w-[100%] bg-white ">
                    Sign Up
                  </button>
                </div>
                <div className="text-center mt-2">
                  <Link to="/login" className="underline text-[#111827]">
                    Log in as tenant/Owner?
                  </Link>
                </div>
              </div>
            </div>
          </>
        )
    }
  return (
    <div>
    <DialogBox
    showYellowButton={false}
    showCancelButton={false}
      show={isOpenLoginDilog}
      onClose={()=>setIsOpenLoginDilog(false)}
      children={handleOpenContent()}
      width="w-[350px]"
    />
    </div>
  )
}

export default VisiterLogin