import ActionFeed from '../InfoComps/ActionFeed'
import Updates from '../InfoComps/Updates'
import BonusMissions from '../TeamPageComps/BonusMissions'
import { Inventory } from '../TeamPageComps/Inventory'
import { StatusEffects } from '../TeamPageComps/StatusEffects'
import Tasks from '../TeamPageComps/Tasks'

const Grid = () => {
    return (
        <div className="px-4 grid gap-3 grid-cols-12">
            <Updates />
            <ActionFeed />
            <Tasks />
            <BonusMissions />
            <Inventory /> 
            <StatusEffects />
        </div>
    )
}

export default Grid