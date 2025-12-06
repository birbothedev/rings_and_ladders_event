import { useState, useEffect } from 'react'
import { FiSquare, FiCheckSquare, FiXCircle } from "react-icons/fi"

const OpenActiveReports = ({ isOpen, onClose, setIsReportComplete, isCompleted }) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsChecked(isCompleted)  
            console.log(`report completion in open comp: ${isCompleted}`)
        }
    }, [isOpen, isCompleted])

    const handleSubmit = () => {
        setIsReportComplete(isChecked)
        console.log(`is button checked: ${isChecked}`)
        onClose()
        console.log(`report completion: ${isCompleted}`)
    }


    if (!isOpen) return null

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-110">
            <div className="w-6xl flex flex-col gap-2 ">
                <button className="text-2xl place-self-end cursor-pointer px-3 pt-1 pb-2 flex text-center items-center justify-center hover:text-textmuted" onClick={onClose}>
                    <FiXCircle />
                </button>
                <div className="bg-border/80 p-4 rounded-2xl flex flex-col gap-4">
                    <div className="py-4 px-4 pl-1 rounded-full text-3xl font-bold">Report Subject Line Here</div>
                    <form className="border-primary border-3 rounded-2xl p-4 text-md flex flex-col gap-4">
                        <>
                            <label className="flex justify-between items-center gap-2">
                                <span className="text-2xl">Report Sent By</span>
                            </label>
                            <div className="border-primary border rounded-2xl p-3"> 
                                Discord Username
                            </div>
                        </>
                        <>
                            <label className="flex justify-between items-center gap-2">
                                <span className="text-2xl">Description of the Issue</span>
                                
                            </label>
                            <div className="border-primary border rounded-2xl p-3"> 
                                This is a 500 character placeholder text This is a 500 character placeholder text This is a 500 character placeholder text This is a 500 character placeholder text This is a 500 character placeholder text This is a 500 character placeholder text This is a 500 character placeholder text This is a 500 character placeholder text This is a 500 character placeholder text This is a 500 character placeholder text This is a 500 character placeholder text This is a 500 character placeholder text This is 
                            </div>
                        </>
                        <>
                            <label className="flex justify-between items-center gap-2">
                                <span className="text-2xl">Uploaded File</span>
                            </label>
                            <div className="border-primary border rounded-2xl p-3"> 
                                filename.txt
                            </div>
                        </>
                        
                    </form>
                    <div className="flex flex-row justify-between">
                        <div className="p-1 flex items-center gap-2">
                            <button
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => setIsChecked(prev => !prev)}
                            >
                                {isChecked ? (
                                    <FiCheckSquare size={24} />
                                ) : (
                                    <FiSquare size={24} />
                                )}
                                <span>Mark Report as Complete</span>
                            </button>
                        </div>
                        <button 
                            className="text-xl place-self-end cursor-pointer hover:bg-primary/40 rounded-full px-3 pt-1 pb-2 flex text-center items-center justify-center hover:text-darkblue" 
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default OpenActiveReports