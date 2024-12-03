import { PATCH_OWNER_UPLOAD_AGREEMENT_URL } from "constants/api";
import useAPICall from "hooks/useAPICall";

const usePatchUploadAgreement = () => {
  const [data, error, isLoading, callPatchUploadAgreement, setSuccessData, setError] =
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

  const patchUploadAgreement = (body) => {
    const url = PATCH_OWNER_UPLOAD_AGREEMENT_URL;
    callPatchUploadAgreement({
      url,
      method: "PATCH",
      statusObj,
      body,
      defaultFallback,
    });
  };

  return [data, error, isLoading, patchUploadAgreement, setSuccessData, setError];
};

export default usePatchUploadAgreement;
 