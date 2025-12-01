import { useState} from "react"
import { Dashboard } from "../components/Dashboard"
import Sidebar from "../components/Sidebar"
import { fetchTeamData } from "../components/Contexts/TeamContext"
import { act } from "react"

export function AdminPage(){
    const [selectedRoute, setSelectedRoute] = useState("")
    const { teamData, loading, error } = fetchTeamData()
    const [isReportsSelected, setIsReportsSelected ] = useState(false)

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!teamData) return <div>no team data</div>

    return (
        <div className="p-4 pt-20 grid grid-gap-4 grid-cols-[220px_1fr]">
            <Sidebar selectedRoute={selectedRoute} setSelectedRoute={setSelectedRoute} activeReports={isReportsSelected} setIsReportsSelected={setIsReportsSelected} teamData={teamData}/>
            <Dashboard page={"admin"} selectedRoute={selectedRoute} teamData={teamData} activeReports={isReportsSelected}/>
        </div>
    )
}