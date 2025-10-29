import ActionFeed from '../InfoComps/ActionFeed'
import Updates from '../InfoComps/Updates'
import BonusMissions from './BonusMissions'
import { Inventory } from './Inventory'
import { StatusEffects } from './StatusEffects'
import Tasks from './Tasks'

const Grid = ({page}) => {
    return (
        <div className="px-4 grid gap-3 grid-cols-12">
            {
                page !=="admin" &&
                <>
                    <Updates />
                    <ActionFeed />
                </>
            }
            
            <Tasks />
            <BonusMissions />
            <Inventory /> 
            <StatusEffects />
        </div>
    )
}

export default Grid