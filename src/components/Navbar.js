import React,{useState} from 'react'
import NotebookList from "./NotebookList";
import NoteList from "./NoteList";
import Profile from "./Profile";
import {AiOutlineMenu} from 'react-icons/ai'
import {MdClose} from 'react-icons/md'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div>
            <Router>
    <div>
        <div className="p-2 px-6 flex flex-col shadow-inner bg-white sm:border-b-2 border-gray-300">
            <div className="hidden sm:flex justify-self-center self-center">
                <ul className="flex justify-center  bg-white">
                    <li className="p-4 px-6 text-xl hover:shadow-inner rounded-xl hover:font-bold hover:text-orange-550 ">
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li  className="p-4 px-6 text-xl hover:shadow-inner rounded-xl hover:font-bold hover:text-orange-550">
                        <Link to="/notebooks">Notebooks</Link>
                    </li>
                    <li  className="p-4 px-6 text-xl hover:shadow-inner rounded-xl hover:font-bold hover:text-orange-550">
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
        
            <div onClick={() => setMenuOpen(!menuOpen)} className="bg-gray-100 p-1 rounded-md flex justify-self-end self-end sm:hidden">
                {menuOpen?<MdClose/>:<AiOutlineMenu className="h-6 w-6"/>}
            </div>
            {menuOpen?<ul className=" justify-self-center ">
                <li className="py-2">Notebooks</li>
                <li className="py-2">Profile</li>
                <li className="py-2">Notes</li>
            </ul>:null}


        </div>

     
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