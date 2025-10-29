import Grid from "./DashboardComps/Grid";
import { TopBar } from "./DashboardComps/TopBar";

export function Dashboard({page}){
    return (
        <>
            {
                page ==="team" &&
                <>
                    <div className="bg-bordermuted/60 rounded-lg pb-4 shadow h-fit">
                            <TopBar />
                            <Grid page={page}/>
                    </div>
                </> 
            }
            {
                page ==="admin" &&
                <>
                    <div className="rounded-lg pb-4 shadow h-fit">
                        <div className="pt-4">
                            <Grid page={page}/>
                        </div>
                    </div>
                </> 
            }
        </>
    )
}