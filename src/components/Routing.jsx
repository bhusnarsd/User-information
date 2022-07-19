import React from 'react'
import {Routes, Route} from "react-router-dom";

import Newuserform from "./Newuserform";
import Home from './Home';
import Edituser from './Edituser';
import Delete from './Delete';

function Routing() {
  return (
    <Routes>
        <Route exact path="/newuserform" element={<Newuserform/>}></Route>
        <Route exact path="/edituser/:userID" element={<Edituser/>}></Route>
        <Route exact path="/delete/:userID" element={<Delete/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
    </Routes>
  );
}

export default Routing;