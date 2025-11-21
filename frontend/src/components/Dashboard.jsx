import { fetchTeamData } from "./Contexts/TeamContext"
import Grid from "./DashboardComps/Grid"
import { TopBar } from "./DashboardComps/TopBar"

export function Dashboard({page, teamData}){
    // if page is admin use selected team, otherwise use teamData prop
    const selectedTeam = page === "admin" ? fetchTeamData()?.selectedTeam : teamData;

    return (
        <div className="rounded-lg pt-20 pb-4 shadow h-fit">
            <TopBar page={page} team={selectedTeam} />
            <Grid page={page} team={selectedTeam} />
        </div>
    )
}