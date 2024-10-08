import useAPICall from "../../../hooks/useAPICall";
import en from "../../../Lang/en.json";

const useGetData = () => {
  const [data, error, isLoading, callGetData, setSuccessData, setError] =
    useAPICall(undefined, "");

  const defaultFallback = () => {
    setError(en.something_went_wrong);
    setSuccessData(undefined);
  };

  const statusObj = [
    {
      status_code: "200",
      status_txt: "SUCCESS",
      callBack: (res) => {
        const data = res.data;
        console.log("inside useGetData", res);
        if (data && typeof data === "object") {
          setSuccessData({ data: res.data });
        } else {
          defaultFallback();
        }
      },
    },
    {
      status_txt: "Bad Request",
      status_code: 400,
      callBack: defaultFallback,
    },
    {
      status_txt: "Internal Server Error",
      status_code: 500,
      callBack: defaultFallback
    }
  ];

  const getData = (params) => {
    const url = "/getData.json";
    callGetData({
      url,
      method: "GET",
      statusObj,
      defaultFallback,
      params,
    });
  };
  return [data, error, isLoading, getData, setSuccessData, setError];
};

export default useGetData;
