import {GET_IDIVIDUAL_PROPERTIES_API_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const useGetHomeIndividualProperty = () => {
  const [data, error, isLoading, callGetProperties, setSuccessData, setError] =
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

  const getProperties = (itemId,body) => {
    const url = GET_IDIVIDUAL_PROPERTIES_API_URL.replace(":itemId",itemId);
    const config ={};
    callGetProperties({
      config,
      url,
      method: "GET",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, getProperties, setSuccessData, setError];
};

export default useGetHomeIndividualProperty;
