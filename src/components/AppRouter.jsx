import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../routers/layouts/Header";
import Footer from "../routers/layouts/Footer";
import Content from "../routers/layouts/Content";

const AppRouter = () => {
  return (
    <Router>
      {/* HEADER */}
      <Route path="/" component={Header} />

      {/* CONTENT */}
      <Route path="/" component={Content} />

      {/* FOOTER */}
      <Route path="/" component={Footer} />
    </Router>
  );
};

export default AppRouter;
