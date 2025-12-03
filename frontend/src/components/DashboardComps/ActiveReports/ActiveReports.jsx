import { useState, useEffect } from "react"
import OpenActiveReports from "./OpenActiveReports"

const ActiveReports = () => {
    const [showCompleted, setShowCompleted] = useState(false)
    const [isReportComplete, setIsReportComplete] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const reports = []
    const reportCount = 25
    let currentIndex = 0

    for (let i=0; i < reportCount; i++){
        currentIndex++
        reports.push({
            name: `report number ${i + 1}`,
            description: "this is a description of a report",
            username: "username",
            completed: false
        })
    }


    return (
        <>
        <div className="p-4 flex flex-col">
            <button 
                className="place-self-end hover:text-textmuted cursor-pointer"
                onClick={() => setShowCompleted(prev => !prev)}
            >
                {showCompleted ? "Hide Completed" : "Show Completed"}
            </button>
            <div className="p-4 space-y-4 flex flex-col grid-cols-1">
                {reports.map((report, index) => (
                    <div 
                        key={index}
                        className="p-4 border-3 border-border rounded-lg cursor-pointer hover:border-bordermuted col-span-1"
                        onClick={() => setOpenForm(true)}
                    >
                        {report.name}
                    </div>
                ))}
            </div>
        </div>

        <OpenActiveReports isOpen={openForm} onClose={() => setOpenForm(false)} isCompleted={isReportComplete} setIsReportComplete={setIsReportComplete}/>
        </>
    )
}

export default ActiveReports