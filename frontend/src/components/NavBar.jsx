import { ReportForm } from "./helpers/ReportForm"
import { useState } from "react"

const listItems = [
    {title: 'Home', link: "/"},
    {title: 'Team', link: "/teampage"},
    {title: 'Admin', link: "/adminpage"},
]

export function NavBar(){
    const [openForm, setOpenForm] = useState(false)
    
    // TODO change button to say login or logout based on logged in state
    const handleLogin = () => {
        console.log("login clicked")
    }

    return (
        <>
        <div className="fixed bg-border/30 flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-5 rounded-full backdrop-blur-md shadow-lg z-100"
        >
            <ul className="flex gap-8 text-xl">
                {listItems.map((item) => (
                    <li className="relative group cursor-pointer " key={item.title}>
                        <a href={item.link}>{item.title}</a> 
                        <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-linear-to-l from-success to-info transition-all duration-300 group-hover:w-full "></span>
                    </li>
                ))}
            </ul>

            <div className="flex gap-4">
                <button 
                    className="bg-linear-to-l from-bordermuted to-border py-1 px-6 rounded-full shadow-xl text-lg hover:from-success hover:to-info hover:shadow-success/10 font-semibold hover:text-darkblue cursor-pointer" 
                    onClick={handleLogin}
                >
                    Login
                </button> 

                <button 
                    className="bg-linear-to-l from-bordermuted to-border py-1 px-6 rounded-full shadow-xl text-lg hover:from-success hover:to-info hover:shadow-success/10 font-semibold hover:text-darkblue cursor-pointer" 
                    onClick={() => setOpenForm(true)}
                >
                    Report an Issue
                </button>  
            </div>
        </div>
            
            <ReportForm isOpen={openForm} onClose={() => setOpenForm(false)}/>
        </>
            
    )
}