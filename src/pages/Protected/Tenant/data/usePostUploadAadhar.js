import {POST_TENANT_PROFILE_UPLOAD_AADHAR_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostUploadAadhar = () => {
  const [data, error, isLoading, callPostUploadAadhar, setSuccessData, setError] =
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

  const postUploadAadhar = (body) => {
    const url = POST_TENANT_PROFILE_UPLOAD_AADHAR_URL;
    callPostUploadAadhar({
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, postUploadAadhar, setSuccessData, setError];
};

export default usePostUploadAadhar;
