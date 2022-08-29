import React from 'react'
import { NavLink } from "react-router-dom";
import {useState} from "react";
// import {useHistory } from 'react-router'

const Register = () => {

  // const history = useHistory();

  const [user, setUser] = useState({
    username : "",
    email : "",
    password : ""
  });


  //Handle Inputs
  const handleInput = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user, [name]:value});
  }

//Handle Submit
const handleSubmit = async (event) =>{
  event.preventDefault();
  //Object Destructuring
  //Store Object Data into Variables
  const {username, email, password} = user;
  try{
    //This is Submitted on port 3000 by default which is front ent but need to submit data
    //through the back end which will be the port 3001. So a Proxy will be required.
    const res = await fetch('/register', {
      method : "POST",
      headers : {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        username, email, password
      })
    })

    if(res.status === 400 || !res){
      window.alert("Already Used Details")
    }else{
      window.alert("Registered Successfully")
      // history.pushState('/login')
    }
  }catch (error){
    console.log(error);
  }
}

  return (
    <div>
            <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">Hello, Friend!</h1>
            <p className="lead text-center form">
              Enter Your details to register!
            </p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form onSubmit={handleSubmit} method="POST">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="username"
                  value={user.username}
                  onChange={handleInput}


                />             
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-4 rounded-pill">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
