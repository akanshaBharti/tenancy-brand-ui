import { POST_LOGOUT_URL } from "constants/api";
import useAPICall from "hooks/useAPICall";


const usePostLogout = () => {
  const [logoutData, LogoutError, LogoutIsLoading, callPostLogout, setSuccessLogoutData, setLogoutError] =
    useAPICall(undefined, "");

    

  const defaultFallback = () => {
    // setLogoutError(en.something_went_wrong);
    setSuccessLogoutData(undefined);
  };

  const statusObj = [
    {
      status_code: 204,
      status_text: "OK",
      callBack: (res) => {
        const logoutData = res;
        if (logoutData && typeof logoutData === "object") {
          setSuccessLogoutData(logoutData);
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
// console.log(localStorage.getItem('token'))
  const postLogout = (body) => {
    const url = POST_LOGOUT_URL
    callPostLogout({
      url,
      method : "POST",
      statusObj,
      defaultFallback,
      body
    });
  };
  return [logoutData, LogoutError, LogoutIsLoading, postLogout, setSuccessLogoutData, setLogoutError];
};

export default usePostLogout;
