import ActionFeed from '../InfoComps/ActionFeed'
import Updates from '../InfoComps/Updates'
import ActiveReports from './ActiveReports/ActiveReports'
import BonusMissions from './BonusMissions'
import { Inventory } from './Inventory'
import { StatusEffects } from './StatusEffects'
import Tasks from './Tasks'

const Grid = ({page, team, activeReports}) => {

    if (!team) return <div className="p-4">No Team Selected.</div>
    
    if (activeReports) return (
        <div>
            <ActiveReports />
        </div>
    )

    return (
        <div className="px-4 grid gap-3 grid-cols-12">
            {
                page !=="admin" &&
                <>
                    <Updates />
                    <ActionFeed />
                </>
            }
            
            <Tasks tasks={team?.teamData?.teamTasks || "No team selected"}/>
            <BonusMissions team={team?.teamData?.teamMissions || "No team selected"}/>
            <Inventory team={team?.teamData?.teamInventory || "No team selected"}/> 
            <StatusEffects team={team?.teamData?.teamEffects || "No team selected"}/>
        </div>
    )
}

export default Grid