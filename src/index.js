import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Root from "./components/root.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Support from "./pages/support.jsx";
import Contact from "./pages/contact.jsx";
import Webapp from "./pages/webapp.jsx";
import Marketing from "./pages/marketing.jsx";
import Outsourcing from "./pages/outsourcing.jsx";
import Graphic from "./pages/graphic.jsx";
import PriceList from "./pages/price_list.jsx";
import NotFound from "./pages/not_found.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Root>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webapp" element={<Webapp />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/outsourcing" element={<Outsourcing />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/price_list" element={<PriceList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Root>
  </BrowserRouter>
);
