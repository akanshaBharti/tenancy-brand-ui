import {POST_MOBILE_CHANGE_OTP_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostMobileChangeOtp = () => {
  const [data, error, isLoading, callPostMobileChangeOtp, setSuccessData, setError] =
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

  const postMobileChangeOtp = (body) => {
    const url = POST_MOBILE_CHANGE_OTP_URL;
    callPostMobileChangeOtp({
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, postMobileChangeOtp, setSuccessData, setError];
};

export default usePostMobileChangeOtp;
