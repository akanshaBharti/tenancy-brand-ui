import { GET_OWNER_DASHBOARD_URL } from "constants/api";
import useAPICall from "hooks/useAPICall";

const useGetOwnerDashboard = () => {
  const [data, error, isLoading, callGetOwnerDashboard, setSuccessData, setError] =
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

  const getOwnerDashboard = (body) => {
    const url = GET_OWNER_DASHBOARD_URL;
    callGetOwnerDashboard({
      url,
      method: "GET",
      statusObj,
      body,
      defaultFallback,
    });
  };

  return [data, error, isLoading, getOwnerDashboard, setSuccessData, setError];
};

export default useGetOwnerDashboard;
 