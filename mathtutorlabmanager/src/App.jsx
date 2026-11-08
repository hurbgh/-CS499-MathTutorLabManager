import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css"
import StudentSignIn from "./components/StudentSignIn";
import { sessionAttendance } from "./data/mockData";

export default function App(){
    const [view,setView]=useState("home");
    const [records,setRecords]=useState(sessionAttendance);

    function handleSignIn(record){
        setRecords([...records,record]);
    }
    return(
        <div>
            <Navbar currentView={view} onSelect={setView}/>
            {view === "home"&&<Home/>}
            {view === "student"&&<StudentSignIn onSignIn={handleSignIn}/>}
            {view === "tutor"&&<p>Tutor sign-in put here</p>}
            {view === "admin"&&<p>Admn dashboard - {records.length} records on file</p>}
        </div>
    )
}