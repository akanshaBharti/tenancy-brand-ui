import { POST_SCHEDULE_VISIT_URL } from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostScheduleVisit = () => {
  const [
    data,
    error,
    isLoading,
    callPostScheduleVisit,
    setSuccessData,
    setError,
  ] = useAPICall(undefined, "");

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

  const postScheduleVisit = (body, itemId) => {
    const url = POST_SCHEDULE_VISIT_URL.replace(":itemId", itemId);
    callPostScheduleVisit({
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body,
    });
  };

  return [data, error, isLoading, postScheduleVisit, setSuccessData, setError];
};

export default usePostScheduleVisit;
