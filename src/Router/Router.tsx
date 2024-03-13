// react router dom
import { Navigate, Route, Routes } from "react-router-dom";

// hook react queryy
import { useQuery } from "@tanstack/react-query";

// function get data react qury
import { getProfile } from "../services/userReactQuerys";

// components page
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import DashboardPage from "../pages/DashboardPage";
import PageNotFound from "../pages/404";

// loader Allpage
import Loader from "../components/Loader";

function Router() {
  const { data, isLoading } = useQuery(["Profile"], getProfile);
  console.log(data);
  if (isLoading) return <Loader />;

  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={data ? <DashboardPage /> : <Navigate to="/auth" />}
        />

        <Route
          path="/admin"
          element={
            data && data.role === "ADMIN" ? <AdminPage /> : <Navigate to="/" />
          }
        />

        <Route
          path="/auth"
          element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
