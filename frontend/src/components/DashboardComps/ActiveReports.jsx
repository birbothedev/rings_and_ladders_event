import { useState } from "react"

const ActiveReports = () => {
    const [showCompleted, setShowCompleted] = useState(false)
    const reports = []
    const reportCount = 25

    for (let i=0; i < reportCount; i++){
        reports.push({
            name: `report number ${i + 1}`,
            description: "this is a description of a report",
            username: "username",
            completed: false
        })
    }

    const handleOpenReport = (report) => {
        console.log("report clicked: ", report)
    }

    return (
        <div className="p-4 flex flex-col">
            <button 
                className="place-self-end hover:text-textmuted cursor-pointer"
                onClick={() => setShowCompleted(prev => !prev)}
            >
                {showCompleted ? "Hide Completed" : "Show Completed"}
            </button>
            <div className="p-4 space-y-4">
                {reports.map((report, index) => (
                    <div 
                        key={index}
                        className="p-4 border-3 border-border rounded-lg cursor-pointer hover:border-bordermuted"
                        onClick={() => handleOpenReport(report)}
                    >
                        {report.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActiveReports