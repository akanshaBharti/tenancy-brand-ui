import {POST_LOGIN_API_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostLogin = () => {
  const [data, error, isLoading, callPostLogin, setSuccessData, setError] =
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

  const PostLogin = (body) => {
    const url = POST_LOGIN_API_URL;
    const config ={};
    callPostLogin({
      config,
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, PostLogin, setSuccessData, setError];
};

export default usePostLogin;
