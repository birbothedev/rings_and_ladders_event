import { MapInteractionCSS } from 'react-map-interaction'
import { GameBoard } from '../components/GameBoard'
import GridGameboard from '../components/GridGameboard'
import { TileFetch } from '../components/Contexts/TileContext'

export function HomePage(){
    
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
            <MapInteractionCSS
                minScale={0.25}
                maxScale={5.0}
            >
                <TileFetch>
                    <GameBoard />
                </TileFetch>
            </MapInteractionCSS>
        </div>
    )
}