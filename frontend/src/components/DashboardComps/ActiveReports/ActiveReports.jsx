import { useState } from "react"
import OpenActiveReports from "./OpenActiveReports"

const ActiveReports = () => {
    const [showCompleted, setShowCompleted] = useState(false)
    const [isReportComplete, setIsReportComplete] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const [selectedReportIndex, setSelectedReportIndex] = useState(null)

    const [reports, setReports] = useState(() => {
        const initial = []
        for (let i = 0; i < 25; i++) {
            initial.push({
                name: `report ${i + 1} subject line here`,
                description: "this is a description of a report",
                username: "username",
                completed: false
            })
        }
        return initial
    })

    const handleReportCompletion = (value) => {
        setReports(prev => {
            const updated = [...prev]
            updated[selectedReportIndex] = {
                ...updated[selectedReportIndex],
                completed: value
            }
            return updated
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
                {reports
                    .filter(report => showCompleted || !report.completed)
                    .map((report, index) => {
                        const realIndex = reports.indexOf(report)
                        return (
                            <div 
                                key={realIndex}
                                className={`p-4 border-3 border-border rounded-lg cursor-pointer hover:border-bordermuted col-span-1
                                ${report.completed ? "line-through opacity-60" : ""}`}
                                onClick={() => (
                                    setOpenForm(true),
                                    setSelectedReportIndex(realIndex),
                                    setIsReportComplete(report.completed),
                                    console.log(`report completion in report comp: ${report.completed}`)
                                )}
                            >
                                {report.name}
                            </div>
                        )
                        
                    })}
            </div>
        </div>

        <OpenActiveReports isOpen={openForm} onClose={() => setOpenForm(false)} isCompleted={isReportComplete} setIsReportComplete={handleReportCompletion}/>
        </>
    )
}

export default ActiveReports