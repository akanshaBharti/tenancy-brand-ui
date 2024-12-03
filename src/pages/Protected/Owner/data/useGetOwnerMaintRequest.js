import { GET_OWNER_MAINTENANCE_REQUEST_URL } from "constants/api";
import useAPICall from "hooks/useAPICall";

const useGetOwnerMaintenanceRequest = () => {
  const [data, error, isLoading, callGetOwnerMaintenanceRequest, setSuccessData, setError] =
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

  const getOwnerMaintenanceRequest = (body) => {
    const url = GET_OWNER_MAINTENANCE_REQUEST_URL;
    callGetOwnerMaintenanceRequest({
      url,
      method: "GET",
      statusObj,
      body,
      defaultFallback,
    });
  };

  return [data, error, isLoading, getOwnerMaintenanceRequest, setSuccessData, setError];
};

export default useGetOwnerMaintenanceRequest;
 