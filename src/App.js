/* eslint-disable no-unused-vars */
import {Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout"; 
import Homepage from "./pages/Homepage"; 
import Resumes from "./pages/Resumes"; 
import Login from "./pages/LoginRegister";
import Resum from "./pages/Resum";
import Project from "./pages/Project"
import Profile from "./pages/Profile";
import Edit from "./pages/Edit"
import './style/App.scss';
import { MongoClient, ServerApiVersion } from 'mongodb';


const uri = "mongodb+srv://pantsyrmaksym:<password>@cv.utvutop.mongodb.net/?retryWrites=true&w=majority&appName=CV";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="resumes" element={<Resumes />} >
            <Route path="resume/:id" element={<Resum />} />
            <Route path="project/:id" element={<Project />} />     
          </Route>
          <Route path="profile/:id" element={<Profile />} >
            <Route path="edit" element={<Edit />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
