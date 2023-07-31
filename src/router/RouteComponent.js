import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutLanding from "../widgets/LayoutLanding";
import Home from "../pages/Home";
import { GlobalProvider } from "../context/GlobalContext";
import Login from "../pages/Login";
import LayoutDashboard from "../widgets/LayoutDashboard";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardJobVacancy from "../pages/dashboard/DashboardJobVacancy";
import DashboardForm from "../pages/dashboard/DashboardForm";
import Cookies from "js-cookie";
import NotFound from "../pages/NotFound";
import AccountProfile from "../pages/dashboard/AccountProfile";
import Detail from "../pages/Detail";
import Vacancy from "../pages/Vacancy";
import ScrollToTop from "../component/ScrollToTop";

const RouteComponent = () => {
  const LoginRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    }
  };
  const DashboardRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return <Navigate to={"/login"} />;
    } else if (Cookies.get("token") !== undefined) {
      return props.children;
    }
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <LayoutLanding>
                  <Home />
                </LayoutLanding>
              }
            />
            <Route
              path="/job-vacancy"
              element={
                <LayoutLanding>
                  <Vacancy />
                </LayoutLanding>
              }
            />

            <Route
              path="/detail/:id"
              element={
                <LayoutLanding>
                  <Detail />
                </LayoutLanding>
              }
            />
            <Route
              path="/login"
              element={
                <LoginRoute>
                  <Login />
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <DashboardRoute>
                  <LayoutDashboard>
                    <Dashboard />
                  </LayoutDashboard>
                </DashboardRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <DashboardRoute>
                  <LayoutDashboard>
                    <DashboardJobVacancy />
                  </LayoutDashboard>
                </DashboardRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                <DashboardRoute>
                  <LayoutDashboard>
                    <DashboardForm />
                  </LayoutDashboard>
                </DashboardRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/edit/:IdData"
              element={
                <DashboardRoute>
                  <LayoutDashboard>
                    <DashboardForm />
                  </LayoutDashboard>
                </DashboardRoute>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <DashboardRoute>
                  <LayoutDashboard>
                    <AccountProfile />
                  </LayoutDashboard>
                </DashboardRoute>
              }
            />
            <Route path="/err" element={<NotFound />}></Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
