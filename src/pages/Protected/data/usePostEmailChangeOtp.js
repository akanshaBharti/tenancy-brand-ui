import {POST_EMAIL_CHANGE_OTP_URL, POST_MOBILE_CHANGE_OTP_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostEmailChangeOtp = () => {
  const [data, error, isLoading, callPostEmailChangeOtp, setSuccessData, setError] =
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

  const postEmailChangeOtp = (body) => {
    const url = POST_EMAIL_CHANGE_OTP_URL;
    callPostEmailChangeOtp({
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, postEmailChangeOtp, setSuccessData, setError];
};

export default usePostEmailChangeOtp;
