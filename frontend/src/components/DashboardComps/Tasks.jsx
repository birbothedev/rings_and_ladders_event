import { useState } from "react"

const Tasks = ({tasks}) => {

    return (
        <>
            <Card title={"Easy Tasks"} description={"1 die"} tasks={tasks.easy}/>
            <Card title={"Medium Tasks"} description={"2 dice"} tasks={tasks.medium}/>
            <Card title={"Hard Tasks"} description={"3 dice"}  tasks={tasks.hard}/>
            <Card title={"Master Tasks"} description={"4 dice"}  tasks={tasks.master}/>
        </>
    )
}

const Card = ({ title, description, tasks }) => {
    const [showCompleted, setShowCompleted] = useState(false)

    return (
        <div className="flex flex-col p-4 bg-primary/30 col-span-3 rounded-lg">
            <button 
                className="place-self-end hover:text-textmuted cursor-pointer"
                onClick={() => setShowCompleted(prev => !prev)}
            >
                {showCompleted ? "Hide Completed" : "Show Completed"}
            </button>
            <div className="p-4 bg-primary/20 col-span-3 rounded-lg">
                <div className="flex flex-row justify-between">
                    <div className="text-2xl">{title}</div>
                    <div className="text-md place-self-end">{description}</div>
                </div>
                <div className="text-md flex flex-col gap-.5 max-h-72 overflow-auto scrollbar-custom">
                    {tasks
                        .filter(task => showCompleted || !task.completed)
                        .map((task, index) => (
                            <div 
                                key={index}
                                className={task.completed ? "line-through opacity-60" : ""}
                            >
                                {task.description}
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}   

export default Tasks