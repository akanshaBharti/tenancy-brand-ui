import { POST_CREATE_PROPERTY_URL } from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostCreateLandDetails = () => {
  const [data, error, isLoading, callPostCreateLandDetails, setSuccessData, setError] =
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

  const postCreateLandDetails = (body) => {
    const url = POST_CREATE_PROPERTY_URL;
    callPostCreateLandDetails({
      url,
      method: "POST",
      statusObj,
      body,
      defaultFallback,
    });
  };

  return [data, error, isLoading, postCreateLandDetails, setSuccessData, setError];
};

export default usePostCreateLandDetails;
 