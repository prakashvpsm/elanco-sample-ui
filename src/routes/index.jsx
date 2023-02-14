import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import NotFound from "../pages/not-found";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";


function RouterComponent() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<PrivateRoute />}>
          {privateRoutes.map((route) => {
            return <><Route path={route.path} element={route.component} /></>
          })}
        </Route>
        {publicRoutes.map((route) => {
          return (
            <Route path={route.path} element={<PublicRoute />}>
              <Route path={`/${route.path}`} element={route.component} />
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default RouterComponent;
