import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TenantSideNav from "../../pages/Protected/Tenant/SideNav/SideNav";
import TenantTopProfile from "../../pages/Protected/Tenant/Profile/TenantTopProfile";
import OwnerSideNav from "../../pages/Protected/Owner/OwnerSideNav";
import OwnerTopProfile from "../../pages/Protected/Owner/OwnerProfile/OwnerTopProfile";

const ProtectedLayout = () => {
  const location = useLocation();
  const excludeFooterPathsTenant = ["/protected/tenant/profile"];
  const excludeFooterPathsOwner = ["/protected/owner/profile"];

  const shouldExcludeFooter = excludeFooterPathsTenant.includes(
    location.pathname
  );
  const shouldExcludeFooterOwner = excludeFooterPathsOwner.includes(
    location.pathname
  );

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 md:block">
        {location.pathname.includes("/protected/tenant") ? (
          <TenantSideNav />
        ) : (
          <OwnerSideNav />
        )}
      </div>
      <div className="col-span-12 md:col-span-10 pl-[4.4rem] pr-[1rem] pt-[2rem] bg-[#F3F9FF]">
        {location.pathname.includes("/protected/tenant") && (
          <div className=" absolute top-0 right-0 p-[2%] z-50 ">
            {!shouldExcludeFooter && <TenantTopProfile />}
          </div>
        )}
        {location.pathname.includes("/protected/owner") && (
          <div className=" absolute top-0 right-0 p-[2%] z-50 ">
            {!shouldExcludeFooterOwner && <OwnerTopProfile />}
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;
