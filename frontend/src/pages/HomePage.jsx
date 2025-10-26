import { MapInteractionCSS } from 'react-map-interaction'
import { GameBoard } from '../components/GameBoard'
import { useState } from 'react'

export function HomePage(){
    const [mapState, setMapState] = useState({
        scale: 1,
        translation: { x: 0, y: 0 }
    })
    
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen"
        >
            home page :D
            {/* <MapInteractionCSS
                value={mapState}
                onChange={(value) => setMapState(value)}
                minScale={0.25}
                maxScale={2.0}
            >
                <div className="w-100 h-100"><GameBoard /></div>
            </MapInteractionCSS> */}
        </div>
    )
}