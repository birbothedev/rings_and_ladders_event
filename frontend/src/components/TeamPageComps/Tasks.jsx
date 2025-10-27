
const Tasks = () => {
    const taskCount = 15
    let tasks = []
    for (let i=0; i<taskCount; i++){
        tasks.push(`task ${i+1}`)
    }

    return (
        <>
            <Card title={"Beginner Tasks"} tasks={tasks}/>
            <Card title={"Easy Tasks"} tasks={tasks}/>
            <Card title={"Medium Tasks"} tasks={tasks}/>
            <Card title={"Hard Tasks"} tasks={tasks}/>
        </>
    )
}

const Card = ({ title, tasks }) => {
    return (
        <div className="p-4 bg-primary/30 col-span-3 rounded-lg">
            <div className="text-xl">{title}</div>
            <div className="text-md flex flex-col gap-.5 max-h-52 overflow-auto scrollbar-custom">
                {tasks.map((task, index) => (
                    <div key={index}>{task}</div>
                ))}
            </div>
        </div>
    )
}

export default Tasks