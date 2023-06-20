import { Route, Routes as BaseRoutes}   from "react-router-dom";
import App from "../components/app";

import React from "react";
import HomePage from "../pages/Home/HomePage";
import CatalogPage from "../pages/Catalog/CatalogPage";
import NotFundPage from "../pages/NotFoundPage/NotFundPage";

// import SecureRoute from "./guards/SecureRoute";
// import GuestRoute from "./guards/GuestRoute";
// import LoginPage from "../pages/Auth/LoginPage";
// import LogoutPage from "../pages/Auth/LogoutPage";



const Routes = () => {
    return (
        <BaseRoutes>
            <Route path={'/'} element={<App/>}>
                <Route index element={<HomePage />} />
                <Route path={'catalog'} element={<CatalogPage />} />
                <Route path={'*'} element={<NotFundPage />} />
            </Route>

        </BaseRoutes>
    );
};

export default Routes;

