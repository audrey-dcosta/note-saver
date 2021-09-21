import React from 'react'
import NotebookList from "./NotebookList";
import NoteList from "./NoteList";
import Profile from "./Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  

export default function Navbar() {
    return (
        <div>
            <Router>
    <div>
      <ul className="flex justify-center border-b-2 border-gray-300 shadow-inner bg-white">
        <li className="p-4 px-6 text-xl hover:shadow-inner hover:font-bold hover:text-orange-550 ">
          <Link to="/">Dashboard</Link>
        </li>
        <li  className="p-4 px-6 text-xl hover:shadow-inner hover:font-bold hover:text-orange-550">
          <Link to="/notebooks">Notebooks</Link>
        </li>
        <li  className="p-4 px-6 text-xl hover:shadow-inner hover:font-bold hover:text-orange-550">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/">
          <NotebookList />
        </Route>
        <Route path="/notes">
          <NotebookList/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/notebook/:id">
          <NoteList />
        </Route>
      </Switch>
    </div>
  </Router>
            
        </div>
    )
}