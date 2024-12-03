import {POST_TENANT_MAINTENANCE_REQUEST_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostMaintenanceRequest = () => {
  const [data, error, isLoading, callPostMaintenanceRequest, setSuccessData, setError] =
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

  const postMaintenanceRequest = (body) => {
    const url = POST_TENANT_MAINTENANCE_REQUEST_URL;
    callPostMaintenanceRequest({
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, postMaintenanceRequest, setSuccessData, setError];
};

export default usePostMaintenanceRequest;
