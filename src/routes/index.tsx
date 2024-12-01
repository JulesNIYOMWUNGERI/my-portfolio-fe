import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { About, Contact, Home, Projects, Skills } from "../pages";

const Layout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  }
]);

export default router;
