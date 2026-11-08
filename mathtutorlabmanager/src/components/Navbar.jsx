export default function Navbar({currentView,onSelect}){
    return(
        <nav className="navbar">
            <button onClick={()=>onSelect("home")}
            className={currentView==="home"?"active":""}>
                Home
            </button>
            <button onClick={()=>onSelect("student")}
                className={currentView==="student"?"active":""}>
                Student Sign-In
                </button>
            <button onClick={()=>onSelect("tutor")}
                className={currentView==="tutor"?"active":""}>
                Tutor Sign-In
                </button>  
            <button onClick={()=>onSelect("admin")}
                className={currentView==="admin"?"active":""}>
                Amin Dashboard
                </button>
        </nav>
    )
}