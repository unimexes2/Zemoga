import React from "react";


import MainScreen from "../Layout/MainScreen";
import DetailScreen from "../Layout/DetailScreen";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function RoutesWeb () {
 
    return (
    <Router>
        <Route path="/" element={<MainScreen />} />
        <Route path="/Detail" element={<DetailScreen />} />
    </Router>
      
  );
};

