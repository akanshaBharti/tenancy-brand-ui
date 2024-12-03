import { POST_SIGNUP_API_URL } from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostSignup = () => {
  const [data, error, isLoading, callPostSignup, setSuccessData, setError] =
    useAPICall(undefined, "");

  const defaultFallback = () => {
    // setError(en.something_went_wrong);
    setSuccessData(undefined);
  };

  const statusObj = [
    {
      status_code: 201,
      status_text: "Created",
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

  const PostSignup = (body) => {
    const url = POST_SIGNUP_API_URL;
    const config = {};
    callPostSignup({
      config,
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body,
    });
  };

  return [data, error, isLoading, PostSignup, setSuccessData, setError];
};

export default usePostSignup;
