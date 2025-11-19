import { useState} from "react"
import { Dashboard } from "../components/Dashboard"
import Sidebar from "../components/Sidebar"
import { fetchTeamData } from "../components/Contexts/TeamContext"


export function AdminPage(){
    const [selectedRoute, setSelectedRoute] = useState("")
    const { teamData, loading, error } = fetchTeamData()

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!teamData) return <div>no team data</div>

    return (
        <div className="p-4 grid grid-gap-4 grid-cols-[220px_1fr]">
            <Sidebar selectedRoute={selectedRoute} setSelectedRoute={setSelectedRoute} teamData={teamData}/>
            <Dashboard page={"admin"} selectedRoute={selectedRoute} teamData={teamData}/>
        </div>
    )
}