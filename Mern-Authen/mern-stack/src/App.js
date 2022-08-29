import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import {Routes, Route, Switch} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import ProtectedRoute from "./ProtectedRoute";
import {useState} from "react";

function App() {
  //Check if user is logged in
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try{
      const res = await fetch('/auth', {
        method : " GET",
        headers : {
          Accept: "application/json",
          "Content-Type" : "include"
        },
        credentials : "include"
      });

      if(res.status === 200) {
        setauth(true)
        setauth1(false)
      }
      if(res.status === 4010) {
        setauth(false)
        setauth1(true)
      }
    } catch (error){
      console.log(error);
    }
    useEffect(() =>{
      isLoggedIn();
    }, []);

  }
  return (
    <div>
      <Navbar auth={auth1}/>
      <Routes>
      <Switch>
        <Route exact path="/" components={Home} />
        <Route exact path="/about" components={About} />
        <Route exact path="/service" components={Services} />
        <Route exact path="/contact" components={Contact} />
        <ProtectedRoute exact path="/login" components={Login} auth={auth1}/>
        <ProtectedRoute exact path="/register" components={Register} auth={auth1} />
        <ProtectedRoute exact path="/dashboard" components={Dashboard} auth={auth} />
        <ProtectedRoute exact path="/logout" components={Logout} auth={auth} />
        </Switch>
      </Routes>
    </div>
  );
};

export default App;


//Need to have a pr