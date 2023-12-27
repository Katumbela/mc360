import React from 'react';  // Adicione esta linha

import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/courses" exact element={<CourseHome/>} />
          <Route path="/team" exact element={<Team/>} />
          <Route path="/pricing" exact element={<Pricing/>} />
          <Route path="/journal" exact element={<Blog/>} />
          <Route path="/contact" exact element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
