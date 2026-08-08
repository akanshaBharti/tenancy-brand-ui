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
import RentManagement from "./pages/Protected/Tenant/RentManagement/RentManagement";
import TenantLeaseManagement from "./pages/Protected/Tenant/LeaseManagement/LeaseMaintenance";
import TenenatRent from "./pages/Protected/Tenant/Rent/Rent";
import TenantContact from "./pages/Protected/Tenant/Contact/Contact";
import TenantProfile from "./pages/Protected/Tenant/Profile/TenantProfile";
import OwnerHome from "./pages/Protected/Owner/Home/OwnerHome";
import OwnerMaintenance from "./pages/Protected/Owner/MaintenanceRequest/OwnerMaintenance";
import OwnerManageProperty from "./pages/Protected/Owner/ManageProperty/ManageProperty";
import OwnerTenantsManagement from "./pages/Protected/Owner/TenantsManagement/TenantsManagement";
import OwnerProfile from "./pages/Protected/Owner/OwnerProfile/OwnerProfile";
import Profile from "pages/Protected/Visiter/Profile/VisiterProfile";
import Wishlist from "pages/Protected/Visiter/Wishlist/Wishlist";
import ScheduleVisit from "pages/Public/PropertyDetails/ScheduleVisit";
import ScheduledVisits from "pages/Protected/Visiter/ScheduledVisits/ScheduledVisits";
import PropertyPreview from "pages/Protected/Owner/Home/PropertyPreview";
import AddNewProperty from "pages/Protected/Owner/Home/AddNewProperty";

const routes = (isAuthenticated) => [
  {
    path: "/protected",
    element: !isAuthenticated && (
      <>
        {console.log("protected page", isAuthenticated)}
        <ProtectedLayout />
      </>
    ),
    children: [
      { path: "tenant/home", element: <TenantHome /> },
      { path: "tenant/maintenance", element: <TenantMaintenanceRequest /> },
      { path: "owner/rent-management", element: <RentManagement /> },
      { path: "owner/lease-management", element: <TenantLeaseManagement /> },
      { path: "tenant/rent", element: <TenenatRent /> },
      { path: "tenant/contact", element: <TenantContact /> },
      { path: "tenant/profile", element: <TenantProfile /> },
      { path: "owner/home", element: <OwnerHome /> },
      { path: "owner/maintenance", element: <OwnerMaintenance /> },
      { path: "owner/manage-property", element: <OwnerManageProperty /> },
      { path: "owner/tenant-management", element: <OwnerTenantsManagement /> },
      { path: "owner/contact", element: <TenantContact /> },
      { path: "owner/profile", element: <OwnerProfile /> },
      { path: "owner/property-preview/:id", element: <PropertyPreview /> },
      { path: "owner/add-property", element: <AddNewProperty /> },
    ],
  },
  {
    // PUBLIC
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/public/owners", element: <Owners /> },
      { path: "/public/search", element: <SearchProperty /> },
      {
        path: "/public/property-details/:itemId",
        element: <PropertyDetails />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    // VISITER ROUTES, ONLY IF LOGGED IN
    path: "/visiter",
    element: isAuthenticated && (
      <PublicLayout /> // Use PublicLayout or your visitor layout
    ),
    children: [
      { path: "profile", element: <Profile /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "scheduledVisit", element: <ScheduledVisits /> },
    ],
  },
  // {
  //   path: "*",
  //   element: <Error404 />,
  // },
];

export default routes;
