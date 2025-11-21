import React, { createContext, useContext, useState, useEffect, Children } from 'react'

const IndividualTeam = createContext()

export const IndividualTeamFetch = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [teamData, setData] = useState([])

    useEffect(() => {
        async function getTeam(){
            try {
                const response = await fetch("/jsons/sample.json", {
                    method: "GET",
                })
                const teamData = await response.json()
                setData(teamData)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getTeam()
    }, [])

    return (
        <IndividualTeam.Provider value={{teamData, loading, error}}>
            {children}
        </IndividualTeam.Provider>
    )
}

export function fetchIndividualTeam(){
    return useContext(IndividualTeam)
}