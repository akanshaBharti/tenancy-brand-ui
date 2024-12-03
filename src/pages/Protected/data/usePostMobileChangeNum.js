import {POST_MOBILE_CHANGE_NUM_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostMobileChangeNum = () => {
  const [data, error, isLoading, callPostMobileChangeNum, setSuccessData, setError] =
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

  const postMobileChangeNum = (body) => {
    const url = POST_MOBILE_CHANGE_NUM_URL;
    callPostMobileChangeNum({
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, postMobileChangeNum, setSuccessData, setError];
};

export default usePostMobileChangeNum;
