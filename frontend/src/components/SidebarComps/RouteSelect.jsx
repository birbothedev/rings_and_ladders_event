import { fetchTeamData } from "../Contexts/TeamContext"

const RouteSelect = () => {
    const { selectedTeam, setSelectedTeam, teamData, loading, error } = fetchTeamData()

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!teamData) return <div>no team data</div>

    return (
        <>
            <div className="space-y-1 pt-4 pb-4 pr-2 h-fit">
                {teamData.map((team) => (
                    <Route 
                        key={team.teamId}
                        icon={""} 
                        route={team.teamName} 
                        isSelected={selectedTeam?.teamId === team.teamId}
                        onSelect={setSelectedTeam}
                        team={team}
                    />
                ))}
            </div>
            {/* <div className="border-t-3 border-bordermuted pt-4 pb-4">
                <Route 
                    icon={""} 
                    route={"Active Reports"} 
                    isSelected={selectedRoute === "Active Reports"}
                    onSelect={setSelectedRoute}
                />
            </div> */}
        </>
    )
}

const Route = ({ icon, route, isSelected, onSelect, team }) => {
    return (
        <button
            className={`flex items-center justify-start gap-s w-full rounded px-2 py-1.5 text-sm cursor-pointer ${
                isSelected
                    ? "bg-primary/80 text-black shadow font-bold"
                    : "hover:bg-primary/40 bg-transparent text-text shadow-none"
                }`}
            onClick={() => onSelect(team)}
        >
            {icon}
            {route}
        </button>
    )
}

export default RouteSelect