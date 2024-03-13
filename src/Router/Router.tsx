// react router dom
import { Route, Routes } from "react-router-dom";

// components page
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import DashboardPage from "../pages/DashboardPage";
import PageNotFound from "../pages/404";

function Router() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
