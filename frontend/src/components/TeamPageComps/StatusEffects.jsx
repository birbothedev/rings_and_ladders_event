
export function StatusEffects(){
    const missionCount = 30
    let missions = []
    for (let i=0; i< missionCount; i++){
        missions.push(`task ${i+1}`)
    }

    return (
        <>
        <div className="flex flex-col p-4 bg-primary/30 col-span-6 rounded-lg">
            <Card />
        </div>
        </>
    )
}

const Card = ({ timestamp, description }) => {
    return (
        <>
            <div className="col-span-12 flex flex-col p-4 bg-primary/30 rounded-lg">
            <div className="flex justify-between">
                <span className="text-xl ">Status Effects</span>
            </div>
                <span className="text-md max-h-32 overflow-auto scrollbar-custom">
                    00d 00h 00m This is an example status effect<br />
                    00d 00h 00m This is an example status effect<br />
                    00d 00h 00m This is an example status effect<br />
                    00d 00h 00m This is an example status effect<br />
                    00d 00h 00m This is an example status effect<br />
                </span>
            </div>
        </>
    )
}