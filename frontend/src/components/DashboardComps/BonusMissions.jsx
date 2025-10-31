
const BonusMissions = () => {
    const missionCount = 30
    let missions = []
    for (let i=0; i< missionCount; i++){
        missions.push(`task ${i+1}`)
    }

    return (
        <>
        <div className="flex flex-col p-4 bg-primary/30 col-span-12 rounded-lg">
                <div className="p-4 bg-primary/20 rounded-lg">
                    <div className="flex flex-col pb-4">
                        <div className="text-2xl">Impling Hunter</div>
                        <div className="flex flex-row justify-between">
                            <div className="text-md">These Implings have spawned, catch them before they disappear!</div>
                            <div className="place-self-end">Potential Reward</div>
                        </div>
                    </div>
                    <div className="text-md flex flex-col gap-.5 max-h-60 overflow-auto scrollbar-custom">
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                        <Impling tier={"Impling Tier"} timer={"00d 00h 00m"} description={"description"} reward={"reward"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

const Impling = ({ tier, description, reward, timer }) => {
    return (
        <div className="flex flex-col">
            <div className="text-xl">{tier}</div>
            <div className="text-md flex flex-row justify-between">
                <div className="flex flex-row gap-4">
                    <span>{timer}</span>
                    <span className="">{description}</span>
                </div>
                <span className="place-self-end pr-4">{reward}</span>
            </div>
        </div>
    )
}

export default BonusMissions