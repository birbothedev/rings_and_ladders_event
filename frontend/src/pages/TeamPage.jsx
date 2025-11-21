import { fetchIndividualTeam } from "../components/Contexts/IndividualTeamContext"
import { Dashboard } from "../components/Dashboard"

export function TeamPage(){
    const { teamData, loading, error } = fetchIndividualTeam()

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!teamData) return <div>no team data</div>

    return (
        <div className="p-4">
            <Dashboard page={"team"} teamData={teamData} />
        </div>
    )
}