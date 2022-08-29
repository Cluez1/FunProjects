import React from 'react';
import {Route} from 'react-router';
import { Link } from 'react-router-dom';

const ProtectedRoute = ({auth, component: Component, ...rest}) => {
  return (
    <div>
    <Route {...rest} render={(props) => {
        if(auth) return <Component {...props} />
        //was Redirected(link)
        if(!auth) return <Link to={{path : '/', state : {from : props.location}}} />
    }} />
      
    </div>
  )
}

export default ProtectedRoute;
