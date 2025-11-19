import { Tile } from "./helpers/Tile"
import BoardSVG from "../assets/gameboard.svg?react"
import { useEffect, useRef, useState } from "react"

export function GameBoard(){
    const pathRef = useRef(null)
    const svgRef = useRef(null)
    const [points, setPoints] = useState([])

    useEffect(() => {
        if (!svgRef.current) return
        pathRef.current = svgRef.current.querySelector("#gamePath")

        if (!pathRef.current) return
        const pts = getEvenlySpacedPoints(pathRef.current, 500)
        setPoints(pts)
    }, [])


    return (
        <div className="relative w-full h-full">
            <BoardSVG
                className="w-full h-full"
                ref={svgRef}
            />
            
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 809.999993">
                {points.map((p,i)=>(
                        <circle key={i} cx={p.x} cy={p.y} r={6} fill="yellow"/>
                ))}
            </svg>
        </div>    
    )
}

function getEvenlySpacedPoints(path, count) {
    // divide total length by 2 because it loops around the line
    const length = (path.getTotalLength() / 2)
    const points = []
    const offset = 0.0001

    for (let i = 0; i < count; i++) {
        const distance = (length * i) / count  + offset
        const point = path.getPointAtLength(distance)
        points.push({ x: point.x, y: point.y })
    }

    return points
}