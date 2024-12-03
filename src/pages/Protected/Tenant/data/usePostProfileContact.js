import {POST_TENANT_PROFILE_CONTACT_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePostProfileContact = () => {
  const [data, error, isLoading, callPostProfileContact, setSuccessData, setError] =
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

  const postProfileContact = (body) => {
    const url = POST_TENANT_PROFILE_CONTACT_URL;
    callPostProfileContact({
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, postProfileContact, setSuccessData, setError];
};

export default usePostProfileContact;
