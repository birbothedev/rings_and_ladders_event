import { useState } from "react"


const RouteSelect = () => {
    const [isSelected, setIsSelected] = useState(null)

    const teams = []
    let teamCount = 10
    for(let i=0; i < teamCount; i++){
        teams.push(`Team ${i+1}`)
    }
    return (
        <>
            <div className="space-y-1 pt-4 pb-4 pr-2 h-fit">
                {teams.map((team) => (
                    <Route icon={""} route={team} isSelected={false} />
                ))}
            </div>
            <div className="border-t-3 border-bordermuted pt-4 pb-4">
                <Route icon={""} route={"Active Reports"} isSelected={false} />
            </div>
        </>
        
    )
}

const Route = ({icon, route, isSelected}) => {
    return (
        <button
            className={`flex items-center justify-start gap-s w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,color] ${
                isSelected
                    ? "bg-primary/80 text-black shadow font-bold"
                    : "hover:bg-primary/40 bg-transparent text-text shadow-none"
                }`}
        >
            {icon}
            {route}
        </button>
    )
}

export default RouteSelect