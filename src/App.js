//Routes
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { createContext, useEffect, useMemo, useState } from "react";

export const AuthStateContext = createContext();
export const UserDetailsContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  // const routing = useRoutes(routes(isAuthenticated));

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(true);
    }

  }, []);
  const routing = useRoutes(routes(isAuthenticated));


  const AuthStateContextValue = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated, setIsAuthenticated]
  );

  const UserDetailsContextValue = useMemo(
    () => ({ userDetails, setUserDetails }),
    [userDetails, setUserDetails]
  );

  return (
    <AuthStateContext.Provider value={AuthStateContextValue}>
      <UserDetailsContext.Provider value={UserDetailsContextValue}>
         {routing}
       </UserDetailsContext.Provider>
     </AuthStateContext.Provider>
  );
};

export default App;
