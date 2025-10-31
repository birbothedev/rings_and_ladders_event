import ActionFeed from '../InfoComps/ActionFeed'
import Updates from '../InfoComps/Updates'
import BonusMissions from './BonusMissions'
import { Inventory } from './Inventory'
import { StatusEffects } from './StatusEffects'
import Tasks from './Tasks'

const Grid = ({page, team}) => {
    return (
        <div className="px-4 grid gap-3 grid-cols-12">
            {
                page !=="admin" &&
                <>
                    <Updates />
                    <ActionFeed />
                </>
            }
            
            <Tasks team={team?.teamData?.teamTasks || "No team selected"}/>
            <BonusMissions team={team?.teamData?.teamMissions || "No team selected"}/>
            <Inventory team={team?.teamData?.teamInventory || "No team selected"}/> 
            <StatusEffects team={team?.teamData?.teamEffects || "No team selected"}/>
        </div>
    )
}

export default Grid