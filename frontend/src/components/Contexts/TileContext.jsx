import React, { createContext, useContext, useState, useEffect } from 'react'

const TileContext = createContext()

export const TileFetch = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [homeData, setData] = useState([])

    useEffect(() => {
        async function getPoints(){
            try {
                const response = await fetch("/jsons/home.json", {
                    method: "GET",
                })
                const tileData = await response.json()
                setData(tileData)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getPoints()
    }, [])

    return (
        <TileContext.Provider value={{homeData, loading, error}}>
            {children}
        </TileContext.Provider>
    )
}

export function fetchAllTiles(){
    return useContext(TileContext)
}
