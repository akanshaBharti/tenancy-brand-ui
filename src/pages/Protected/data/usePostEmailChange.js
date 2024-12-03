import {GET_PROFILE_URL, POST_EMAIL_CHANGE_URL, POST_MOBILE_CHANGE_NUM_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostEmailChange = () => {
  const [data, error, isLoading, callPostEmailChange, setSuccessData, setError] =
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

  const postEmailChange = (body) => {
    const url = POST_EMAIL_CHANGE_URL;
    callPostEmailChange({
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, postEmailChange, setSuccessData, setError];
};

export default usePostEmailChange;
