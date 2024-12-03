import { GET_OWNER_PROPERTY_PREVIEW } from "constants/api";
import useAPICall from "hooks/useAPICall";

const useGetOwnerPropertyPreview = () => {
  const [data, error, isLoading, callGetOwnerPropertyPreview, setSuccessData, setError] =
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

  const getOwnerPropertyPreview = (id) => {
    const url = GET_OWNER_PROPERTY_PREVIEW.replace(":id", id);
    callGetOwnerPropertyPreview({
      url,
      method: "GET",
      statusObj,
      defaultFallback,
    });
  };

  return [data, error, isLoading, getOwnerPropertyPreview, setSuccessData, setError];
};

export default useGetOwnerPropertyPreview;
 