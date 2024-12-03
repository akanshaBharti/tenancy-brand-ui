import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../pages/Public/Home/Footer";

const PublicLayout = () => {
  const location = useLocation();

  const excludeFooterPaths = ["/login", "/register", "/visiter/profile"];

  const shouldExcludeFooter = excludeFooterPaths.includes(location.pathname);

  return (
    <div>
      <Outlet />
      {!shouldExcludeFooter && <Footer />}
    </div>
  );
};

export default PublicLayout;

