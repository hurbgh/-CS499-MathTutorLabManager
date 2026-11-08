import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css"

export default function App(){
    const [view,setView]=useState("home");

    return(
        <div>
            <Navbar currentView={view} onSelect={setView}/>
            {view === "home"&&<Home/>}
            {view === "student"&&<p>Student sign-in put here</p>}
            {view === "tutor"&&<p>Tutor sign-in put here</p>}
            {view === "admin"&&<p>Admn dashboard put here</p>}
        </div>
    )
}