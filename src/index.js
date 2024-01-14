import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Root from "./components/root.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import NotFound from "./pages/not_found.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Root>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Root>
  </BrowserRouter>
);
