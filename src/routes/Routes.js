import { Route, Routes as BaseRoutes}   from "react-router-dom";
import App from "../components/app";

import React from "react";
import HomePage from "../pages/Home/HomePage";
import CatalogPage from "../pages/Catalog/CatalogPage";
import SecureRoute from "./guards/SecureRoute";
import GuestRoute from "./guards/GuestRoute";
import LoginPage from "../pages/Auth/LoginPage";
import LogoutPage from "../pages/Auth/LogoutPage";
import NotFundPage from "../pages/NotFoundPage/NotFundPage";



const Routes = () => {
    return (
        <BaseRoutes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/catalog'} element={<CatalogPage />} />
            <Route path={'*'} element={<NotFundPage />} />
        </BaseRoutes>
    );
};

export default Routes;

