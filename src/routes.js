import Public from "./pages/Public";
import Protected from "./pages/Protected";
import Error404 from "./pages/Error404";
import PublicLayout from "./hoc/PublicLayout";
import { Navigate } from "react-router-dom";
import ProtectedLayout from "./hoc/ProtectedLayout";
import Home from "./pages/Public/Home/Home";
import Owners from "./pages/Public/Owners/Owners";
import SearchProperty from "./pages/Public/SearchProperty/SearchProperty";
import PropertyDetails from "./pages/Public/PropertyDetails/PropertyDetails";
import Login from "./pages/Public/Login/Login";
import Register from "./pages/Public/Register/Register";
import TenantHome from "./pages/Protected/Tenant/Home/Home";
import TenantMaintenanceRequest from "./pages/Protected/Tenant/MaintenanceRequest/MaintenanceRequest";
import TenenatRent from "./pages/Protected/Tenant/Rent/Rent";
import TenantContact from "./pages/Protected/Tenant/Contact/Contact";
import TenantProfile from "./pages/Protected/Tenant/Profile/TenantProfile";

const routes = (isAuthenticated) => [
  {
    path: "/protected",
    element: isAuthenticated ? (
      <ProtectedLayout />
    ) : (
      <Navigate to="/" />
    ),
    children: [
      { path: "tenant/home", element: <TenantHome /> },
      { path: "tenant/maintenance", element: <TenantMaintenanceRequest /> },
      { path: "tenant/rent", element: <TenenatRent /> },
      { path: "tenant/contact", element: <TenantContact /> },
      { path: "tenant/profile", element: <TenantProfile /> },
      
    
    ],
  },
  {
    // PUBLIC
    path: "/",
    element: !isAuthenticated ? (
      <PublicLayout />
    ) : (
      <Navigate to="/protected/tenant/home" />
    ),
    children: [{ path: "", element: <Home/> },
      { path: "/public/owners", element: <Owners/> },
      { path: "/public/search", element: <SearchProperty/> },
      { path: "/public/property-details/:itemId", element: <PropertyDetails/> },
      { path: "/login", element: <Login/> },
      { path: "/register", element: <Register/> },


    ],
  },
  // {
  //   path: "*",
  //   element: <Error404 />,
  // },
];

export default routes;
