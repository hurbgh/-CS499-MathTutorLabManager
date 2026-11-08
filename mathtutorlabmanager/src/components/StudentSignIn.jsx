import { students, classes } from "../data/mockData";
import { useState } from "react";

export default function StudentSignIn({ onSignIn }) {
    //state first, zone 1
    const [enteredId, setEnteredID] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [matchedStudent, setMatchedStudent] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [classSearch, setClassSearch] = useState("");
    const [selectedClass, setSelectedClass] = useState(null);

    //handlers, zone 1
    function handleLookup(e) {
        e.preventDefault();
        const match = students.find(
            (s) => s.email_id === enteredId && s.full_name === enteredName
        );//AI disclosure. I needed help from AI for the logic and making sure this works properly, also
        //because the bugs are way worse, I made several typos that led to this code rendiring but not working, I needed
        //its help to find hidden typos that secretly broke this
        if (match) {
            setMatchedStudent(match);
            setErrorMsg("");
        } else {
            setMatchedStudent(null);
            setErrorMsg("No student found with that ID and name. Please check for typos.");

        }
    }
    function handleConfirm() {
        if (!selectedClass) return;
        onSignIn({
            session_ID: Date.now(),
            date: new Date().toISOString().slice(0, 10),
            student_email_id: matchedStudent.email_id,
            class_id: selectedClass.class_id,
            //I got help from AI to make the date sign in part, i did not know i can get date using those built in functions
        });
        setEnteredID(""); setEnteredName(""); setMatchedStudent(null);
        setSelectedClass(null); setClassSearch("");
    }
    //jsx three stages shown conditionally, zone 2
    return (
        <div className="student-signin">
            <h2>Student Sign In</h2>
            {!matchedStudent && (
                <form onSubmit={handleLookup}>
                    <label>Student Email ID</label>
                    <input value={enteredId} onChange={(e) =>
                        setEnteredID(e.target.value)} required />
                    <label>Full Name</label>
                    <input value={enteredName} onChange={(e) => setEnteredName(e.target.value)} required />
                    <button type="submit">Look Up</button>
                    {errorMsg && <p className="error">{errorMsg}</p>}
                </form>
            )}
            {matchedStudent && !selectedClass && (
                <div>
                    <p>Welcome, {matchedStudent.full_name}! Which class are you here for?</p>
                    <input placeholder="Search classes..." value={classSearch}
                        onChange={(e) => setClassSearch(e.target.value)} />
                    <ul>
                        {classes
                            .filter((c) =>
                                c.class_name.toLowerCase().includes(classSearch.toLowerCase()) ||
                                c.class_id.toLowerCase().includes(classSearch.toLowerCase()))
                            .map((c) => (
                                <li key={c.class_id}>
                                    <button onClick={() => setSelectedClass(c)}>
                                        {c.class_id}-{c.class_name}
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
            {matchedStudent && selectedClass && (
                <div>
                    <p>{matchedStudent.full_name}-{selectedClass.class_id}({selectedClass.class_name})</p>
                    <button onClick={handleConfirm}>Confirm Sign In</button>
                    <button onClick={() => setSelectedClass(null)}>Pick a different class</button></div>)}
        </div>
    )
}