import useAPICall from "hooks/useAPICall";
import { GET_TENANT_RENT_HISTORY_API_URL } from "constants/api";

const useGetTenantRentHistory = () => {
  const [
    data,
    error,
    isLoading,
    callGetTenantRentHistory,
    setSuccessData,
    setError,
  ] = useAPICall(undefined, "");

  const defaultFallback = () => {
    setError("Something went wrong.");
    setSuccessData(undefined);
  };

  const statusObj = [
    {
      status_code: 200,
      status_text: "OK",
      callBack: (res) => {
        if (res?.data) {
          setSuccessData(res.data);
        } else {
          defaultFallback(); 
        }
      },
    },
    {
      status_code: 400,
      status_text: "Bad Request",
      callBack: defaultFallback,
    },
    {
      status_code: 500,
      status_text: "Internal Server Error",
      callBack: defaultFallback,
    },
  ];

  const getTenantRentHistory = (body) => {
    const url = GET_TENANT_RENT_HISTORY_API_URL;

    callGetTenantRentHistory({
      url,
      method: "GET",
      statusObj,
      body,
      defaultFallback,
    });
  };

  return [data, error, isLoading, getTenantRentHistory, setSuccessData, setError];
};

export default useGetTenantRentHistory;
