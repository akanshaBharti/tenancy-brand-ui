import {PATCH_BASIC_PROFILE_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePatchBasicProfileData = () => {
  const [data, error, isLoading, callPatchBasicProfile, setSuccessData, setError] =
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

  const getPatchBasicProfile = (body) => {
    const url = PATCH_BASIC_PROFILE_URL;
    callPatchBasicProfile({
      url,
      method: "PATCH",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, getPatchBasicProfile, setSuccessData, setError];
};

export default usePatchBasicProfileData;
