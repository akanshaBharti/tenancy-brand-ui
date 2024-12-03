import {GET_PROFILE_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const useGetProfile = () => {
  const [data, error, isLoading, callGetProfile, setSuccessData, setError] =
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

  const getProfile = (body) => {
    const url = GET_PROFILE_URL;
    callGetProfile({
      url,
      method: "GET",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, getProfile, setSuccessData, setError];
};

export default useGetProfile;
