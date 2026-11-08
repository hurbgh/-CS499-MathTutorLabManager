import { useState } from "react";
import {tutors} from "../data/mockData";

export default function TutorSignIn({onClockIn}){
    const [enteredId,setEnteredId]=useState("");
    const [matchedTutor,setMatchedTutor]=useState(null);
    const [errorMsg,setErrorMsg]=useState("");

    function handleLookup(e){
        e.preventDefault();
        const match = tutors.find(
                    (t) => t.email_id === enteredId
                );//AI disclosure. I needed help from AI for the logic and making sure this works properly, also
                //because the bugs are way worse, I made several typos that led to this code rendiring but not working, I needed
                //its help to find hidden typos that secretly broke this
                if (match) {
                    setMatchedTutor(match);
                    setErrorMsg("");
                } else {
                    setMatchedTutor(null);
                    setErrorMsg("No tutor found with that ID. Please check for typos.");
        
                }
    }
    function handleClockIn(){
        onClockIn({
            date: new Date().toISOString().slice(0, 10),
            tutor_email_id: matchedTutor.email_id,
            arrival: new Date().toLocaleTimeString()
            //I got help from AI to make the date sign in part, i did not know i can get date using those built in functions
        });
        setEnteredId("");
        setMatchedTutor(null);
    }
    return(
                <div className="tutorclockin">
                    <h2>Tutor Clock In</h2>
                    {!matchedTutor && (
                        <form onSubmit={handleLookup}>
                            <label>Tutor Email ID</label>
                            <input value={enteredId} onChange={(e) =>
                                setEnteredId(e.target.value)} required />
                            
                            <button type="submit">Look Up</button>
                            {errorMsg && <p className="error">{errorMsg}</p>}
                        </form>
                    )}
                    {matchedTutor && (
                        <div>
                            <p>Welcome, {matchedTutor.full_name}! </p>
                            <button onClick={handleClockIn}>Clock In</button>
                        </div>
                    )}
                
                </div>
    )
}