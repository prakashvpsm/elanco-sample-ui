

import Home from "../pages/home";


const privateRoutes = [
  {
    path: "",
    component: <Home />,
    exact: true,
  }
];



const publicRoutes = [

];

export { privateRoutes, publicRoutes };
