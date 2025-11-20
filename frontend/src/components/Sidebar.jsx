import AccountBar from "./SidebarComps/Accountbar"
import RouteSelect from "./SidebarComps/RouteSelect"


const Sidebar = () => {

    return (
        <div className="px-4 pt-29">
            <div className="sticky top-8 scrollbar-custom">
                    <AccountBar />
                    <RouteSelect />
            </div>
        </div>
    )
}

export default Sidebar