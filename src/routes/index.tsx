import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Path from "@/enums/Path";
import Home from "@/pages/Home";
import Generator from "@/pages/Generator";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Path.HOME} element={<Home />} />
                <Route path={Path.GENERATOR} element={<Generator />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
