import { useState } from "react"

export default function AdminDashboard({records,tutorSessions}){
    const [search,setSearch]=useState("")
//I got help from AI for records.map, I asked it about my options and it showed me how to use it, I then used the it to connect with
//my records
    const filtered = records.filter(
        (r)=>
            r.student_email_id.toLowerCase().includes(search.toLowerCase())
        ||
        r.class_id.toLowerCase().includes(search.toLowerCase())
    )
    return(
        <div className="admin-dashboard">
            <input placeholder="Search by student or class" value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
            <p>Showing {records.length} records</p>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Student</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {records
                    .filter((r)=>
                    r.student_email_id.toLowerCase().includes(search.toLowerCase())
                ||
                    r.class_id.toLowerCase().includes(search.toLowerCase())
                )
                    .map((r)=>(
                        <tr key={r.session_ID}>
                            <td>{r.date}</td>
                            <td>{r.student_email_id}</td>
                            <td>{r.class_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filtered.length===0&&<p>No records mach your search.</p>}
            <h3>Tutor Sessions Today</h3>
            {tutorSessions.length===0&&<p>No tutors have clicked in yet.</p>}
            <ul>
                {tutorSessions.map((t)=>(
                    <li key={t.tutor_email_id +t.arrival}>
                        {t.date}-{t.tutor_email_id} arrived at {t.arrival}
                    </li>
                ))}
            </ul>
        </div>
    )

}
//AI disclosure, I got help from AI to fix how to parse my tutors because I did not realize I was mapping it wrong.