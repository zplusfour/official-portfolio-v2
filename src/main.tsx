import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommandsModal from "@/components/CommandsModal";

import "./index.css";

import Home from "./pages/Home";
import Resume from "./pages/Resume";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CommandsModal />

            <Routes>
                <Route path="/">
                    <Route index element={<Home />}></Route>
                    <Route path="resume" element={<Resume />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
