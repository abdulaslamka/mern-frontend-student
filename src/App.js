import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./component/Student";
import StudentView from "./component/StudentView";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/student" element={<Student method="post" />} />
          <Route path="/studentview" element={<StudentView method="get" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
