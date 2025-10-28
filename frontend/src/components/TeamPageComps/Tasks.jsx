
const Tasks = () => {
    const taskCount = 30
    let tasks = []
    for (let i=0; i<taskCount; i++){
        tasks.push(`task ${i+1}`)
    }

    return (
        <>
            <Card title={"Easy Tasks"} description={"1 die"} tasks={tasks}/>
            <Card title={"Medium Tasks"} description={"2 dice"} tasks={tasks}/>
            <Card title={"Hard Tasks"} description={"3 dice"}  tasks={tasks}/>
            <Card title={"Master Tasks"} description={"4 dice"}  tasks={tasks}/>
        </>
    )
}

const Card = ({ title, description, tasks }) => {
    return (
        <div className="flex flex-col p-4 bg-primary/30 col-span-3 rounded-lg">
            <button className="place-self-end hover:text-textmuted cursor-pointer">Show/Hide Completed</button>
            <div className="p-4 bg-primary/20 col-span-3 rounded-lg">
                <div className="flex flex-row justify-between">
                    <div className="text-2xl">{title}</div>
                    <div className="text-md place-self-end">{description}</div>
                </div>
                <div className="text-md flex flex-col gap-.5 max-h-72 overflow-auto scrollbar-custom">
                    {tasks.map((task, index) => (
                        <div key={index}>{task}</div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Tasks