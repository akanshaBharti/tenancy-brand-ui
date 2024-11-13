import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TenantSideNav from "../../pages/Protected/Tenant/SideNav/SideNav";
import TenantTopProfile from "../../pages/Protected/Tenant/Profile/TenantTopProfile";

const ProtectedLayout = () => {
  const location = useLocation();
  const excludeFooterPaths = ["/protected/tenant/profile"];

  const shouldExcludeFooter = excludeFooterPaths.includes(location.pathname);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <TenantSideNav />
      </div>
      <div className="col-span-10 pl-[4.4rem] pr-[1rem] py-[2rem] bg-[#F3F9FF] ">
        <div className=" absolute top-0 right-0 p-[2%] z-50 ">
          {!shouldExcludeFooter && <TenantTopProfile />}
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default ProtectedLayout;
