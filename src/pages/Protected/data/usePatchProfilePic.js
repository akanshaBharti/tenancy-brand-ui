import {PATCH_PASSWORD_CHANGE_URL, PATCH_PROFILE_PIC_CHANGE_URL, POST_EMAIL_CHANGE_OTP_URL, POST_MOBILE_CHANGE_OTP_URL} from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePatchProfilePic = () => {
  const [data, error, isLoading, callPatchProfilePic, setSuccessData, setError] =
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

  const patchProfilePic = (body) => {
    const url = PATCH_PROFILE_PIC_CHANGE_URL;
    callPatchProfilePic({
      url,
      method: "PATCH",
      statusObj,
      defaultFallback,
      body
    });
  };

  return [data, error, isLoading, patchProfilePic, setSuccessData, setError];
};

export default usePatchProfilePic;
