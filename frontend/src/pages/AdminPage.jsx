import { Dashboard } from "../components/Dashboard"
import Sidebar from "../components/Sidebar"


export function AdminPage(){
    return (
        <div className="p-4 grid grid-gap-4 grid-cols-[220px_1fr]">
            <Sidebar />
                <Dashboard page={"admin"}/>
        </div>
    )
}