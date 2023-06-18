import { Route, Routes as BaseRoutes}   from "react-router-dom";
import App from "../components/app";

import React from "react";
import HomePage from "../pages/Home/HomePage";
import CatalogPage from "../pages/Catalog/CatalogPage";
import SecureRoute from "./guards/SecureRoute";
import GuestRoute from "./guards/GuestRoute";
import LoginPage from "../pages/Auth/LoginPage";
import LogoutPage from "../pages/Auth/LogoutPage";



const Routes = () => {
    return (
        <BaseRoutes>
            <Route path={'/'}>
                <Route element={<App />}>
                    <Route element={<SecureRoute/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path={'catalog'} element={<CatalogPage/>}/>
                        <Route path={'logout'} element={<LogoutPage/>}/>
                    </Route>

                    <Route element={<GuestRoute/>}>
                        <Route path={'login'} element={<LoginPage/>}/>
                    </Route>
                </Route>
            </Route>
        </BaseRoutes>
    );
};

export default Routes;

