import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css"
import StudentSignIn from "./components/StudentSignIn";
import { sessionAttendance } from "./data/mockData";
import TutorSignIn from "./components/TutorSignIn";
import AdminDashboard from "./components/AdminDashboard";

export default function App(){
    const [tutorSessions,setTutorSessions]=useState([]);
    const [view,setView]=useState("home");
    const [records,setRecords]=useState(sessionAttendance);
    function handleClockIn(record){
        setTutorSessions([...tutorSessions,record])
    }
    function handleSignIn(record){
        setRecords([...records,record]);
    }
    return(
        <div>
            <Navbar currentView={view} onSelect={setView}/>
            {view === "home"&&<Home/>}
            {view === "student"&&<StudentSignIn onSignIn={handleSignIn}/>}
            {view === "tutor"&&<TutorSignIn onClockIn={handleClockIn}/>}
            {view === "admin"&&<AdminDashboard records={records} tutorSessions={tutorSessions}/>}
        </div>
    )
}