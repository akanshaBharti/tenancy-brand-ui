import { GET_SCHEDULE_VISIT_URL } from "constants/api";
import useAPICall from "hooks/useAPICall";

const useGetScheduleVisit = () => {
  const [
    data,
    error,
    isLoading,
    callGetScheduleVisit,
    setSuccessData,
    setError,
  ] = useAPICall(undefined, "");

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

  const GetScheduleVisit = (body) => {
    const url = GET_SCHEDULE_VISIT_URL;
    callGetScheduleVisit({
      url,
      method: "GET",
      statusObj,
      defaultFallback,
      body,
    });
  };

  return [data, error, isLoading, GetScheduleVisit, setSuccessData, setError];
};

export default useGetScheduleVisit;
