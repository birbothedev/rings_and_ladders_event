import { createContext, useState, useEffect, useContext } from "react"

const TeamContext = createContext()

export function TeamFetch({children}){
    const [teamData, setTeamData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedTeam, setSelectedTeam] = useState("")

    useEffect(() => {
        async function getTeams() {
            try {
                const response = await fetch("/jsons/teams.json", {
                    method: "GET",
                })
                const teamsJson = await response.json()
                setTeamData(teamsJson.teams)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getTeams()
    }, [])


    return (
        <TeamContext.Provider value={{teamData, loading, error, selectedTeam, setSelectedTeam}}>
            {children}
        </TeamContext.Provider>
    )
}

export function fetchTeamData(){
    return useContext(TeamContext)
}

