import React from "react"
import Navbar from "./Components/Navbar/Navbar";
import {Routes,Route } from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Overview from './Components/SideBar/SidebarComponents/Overview/Overview'
import Recent from './Components/SideBar/SidebarComponents/Recent/Recent'
import Starred from './Components/SideBar/SidebarComponents/Starred/Starred'
import Task from './Components/SideBar/SidebarComponents/Task/Task'
import Alert from "./Components/Alerts/Alert";
import { useGlobalContext } from "./Context/provider";

function App() {

  const {alert} = useGlobalContext()

  return (
    <div>
        {alert && <Alert/>}
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}>
            <Route path="/" element = {<Overview/>}/>
            <Route path="/task" element = {<Task/>}/>
          </Route>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/login" element = {<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
