import AccountBar from "./SidebarComps/Accountbar"
import RouteSelect from "./SidebarComps/RouteSelect"


const Sidebar = ({ setIsReportsSelected }) => {

    return (
        <div className="px-4 pt-29">
            <div className="sticky top-8 scrollbar-custom">
                    <AccountBar />
                    <RouteSelect setIsReportsSelected={setIsReportsSelected}/>
            </div>
        </div>
    )
}

export default Sidebar