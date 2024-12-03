import useAPICall from "../../../../hooks/useAPICall";
import { POST_LOGIN_URL } from "../../../../utilities/api";

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

  const postLogin = (body) => {
    const url = POST_LOGIN_URL;
    const config={};
    callPostLogin({
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      config,
      body,
    });
  };

  return [data, error, isLoading, postLogin, setSuccessData, setError];
};

export default usePostLogin;
