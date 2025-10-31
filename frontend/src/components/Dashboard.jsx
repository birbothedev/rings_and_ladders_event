import { fetchTeamData } from "./Contexts/TeamContext"
import Grid from "./DashboardComps/Grid"
import { TopBar } from "./DashboardComps/TopBar"

export function Dashboard({page}){
    const { selectedTeam } = fetchTeamData()

    return (
        <>
            <div className="rounded-lg pb-4 shadow h-fit">
                <TopBar page={page} team={selectedTeam}/>
                <Grid page={page} team={selectedTeam}/>
            </div>
        </> 
    )
}