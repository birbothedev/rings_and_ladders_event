import Grid from "./DashboardComps/Grid";
import { TopBar } from "./DashboardComps/TopBar";

export function Dashboard(){
    return (
        <div className="bg-bordermuted/60 rounded-lg pb-4 shadow h-fit">
            <TopBar />
            <Grid />
        </div>
    )
}