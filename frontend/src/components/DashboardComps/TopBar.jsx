export function TopBar({page, team, activeReports}){

    const today = new Date()

    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long", 
        day: "numeric" 
    })

    return (
        <div className="border-b-3 px-4 mb-4 mt-2 pb-4 border-bordermuted p-4">
            <div className="flex items-center justify-between p-0.5">
                <div>
                    {page === "team" && 
                        <>
                            <span className="text-lg font-bold block">👋 Hello, {team.teamName || "No team selected"}!</span>
                            <span className="text-sm block">{formattedDate}</span>
                        </>
                    }
                    {page === "admin" && !activeReports && 
                        <>
                            <span className="text-lg font-bold block">{team?.teamName || "No team selected"}</span>
                            <span className="text-sm block">{formattedDate}</span>
                        </>
                    }
                    {activeReports &&
                        <>
                            <span className="text-lg font-bold block">Active Reports</span>
                            <span className="text-sm block">{formattedDate}</span>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}