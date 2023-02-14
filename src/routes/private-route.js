import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { isUserLoggedIn } from "../utils/helper";


const PrivateRoute = (props) => {
  // const auth = isUserLoggedIn();
  // return auth ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet />
};

export default PrivateRoute;
