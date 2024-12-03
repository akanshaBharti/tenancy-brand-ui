import { PATCH_OWNER_PROFILE_URL } from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePatchOwnerProfile = () => {
  const [data, error, isLoading, callPatchOwnerProfile, setSuccessData, setError] =
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

  const patchOwnerProfile = (body) => {
    const url = PATCH_OWNER_PROFILE_URL;
    callPatchOwnerProfile({
      url,
      method: "POST",
      statusObj,
      body,
      defaultFallback,
    });
  };

  return [data, error, isLoading, patchOwnerProfile, setSuccessData, setError];
};

export default usePatchOwnerProfile;
 