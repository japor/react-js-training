import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


// Components.
import {
  Home,
  Header,
  About,
  Teachers,
  Courses,
  NotFound,
  Featured,
} from "./components/";
import { CourseContainer } from "./components/courses";

import { HTMLCourses, CSSCourses, JSCourses } from './data/courses'


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teachers" >
          <Route index element={<Teachers />} />
          <Route path=":name/:topic" element={<Featured />} />
        </Route>

        <Route path="courses" element={<Courses />} >
          <Route index element={<Navigate replace to="html" />} />
          <Route path="html" element={<CourseContainer data={HTMLCourses} />} />
          <Route path="css" element={<CourseContainer data={CSSCourses} />} />
          <Route path="javascript" element={<CourseContainer data={JSCourses} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes >
    </div >
  );
}

export default App;
