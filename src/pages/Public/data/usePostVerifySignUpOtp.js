import {POST_SIGNUP_VERIFY_OTP_API_URL } from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostVerifySignUpOtp = () => {
  const [data, error, isLoading, callPostVerify, setSuccessData, setError] =
    useAPICall(undefined, "");

  const defaultFallback = () => {
    // setError(en.something_went_wrong);
    setSuccessData(undefined);
  };

  const statusObj = [
    {
      status_code: 200,
      status_text: "OK",
      callBack: (res) => {
        const data = res;
        if (data && typeof data === "object") {
          setSuccessData(data);
        } else {
          defaultFallback();
        }
      },
    },
    {
      status_text: "Bad Request",
      status_code: 400,
      callBack: defaultFallback,
    },
    {
      status_text: "Internal Server Error",
      status_code: 500,
      callBack: defaultFallback,
    },
  ];

  const PostVerifyOtp = (body) => {
    const url = POST_SIGNUP_VERIFY_OTP_API_URL;
    const config ={};
    callPostVerify({
      config,
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, PostVerifyOtp, setSuccessData, setError];
};

export default usePostVerifySignUpOtp;
