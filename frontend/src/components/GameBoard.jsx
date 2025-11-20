import { fetchAllTiles } from "./Contexts/TileContext"
import BoardSVG from "../assets/gameboard.svg?react"
import { useEffect, useRef, useState } from "react"

export function GameBoard(){
    const svgRef = useRef(null)
    const { loading, error,  homeData} = fetchAllTiles()

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!homeData) return <div>no tile point data</div>

    const points = homeData.tiles

    return (
        <div className="relative w-full h-full">
            <BoardSVG
                className="w-full h-full"
                ref={svgRef}
            />
            
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 809.999993">
                {points.map((p,i)=>(
                <g key={i}>
                    <circle
                        className="cursor-pointer"
                        cx={p.pos.x}
                        cy={p.pos.y}
                        r={6}
                        fill={p.data.fairyRing ? "cyan" : "yellow"}
                    />
                    <text
                        x={p.pos.x}
                        y={p.pos.y + 2} 
                        fontSize="6"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fill="black"
                        pointerEvents="none"
                    >
                        {i}
                    </text>
                </g>
                ))}
            </svg>
        </div>    
    )
}

// function getEvenlySpacedPoints(path, count) {
//     // divide total length by 2 because it loops around the line
//     const length = (path.getTotalLength() / 2)
//     const points = []
//     const offset = 0.0001

//     for (let i = 0; i < count; i++) {
//         const distance = (length * i) / count  + offset
//         const point = path.getPointAtLength(distance)
//         const isFairy = ((i + 1) % 10 === 0) && (i !== (count - 1))

//         points.push({ tile: i, pos: { x: point.x, y: point.y }, data: {fairyRing: isFairy} })
//     }

//     return points
// }