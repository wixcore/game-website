import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexAccount from "../components/account/";
import NotFound from "../components/NotFound";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<IndexAccount />} />
                <Route path="/" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Router