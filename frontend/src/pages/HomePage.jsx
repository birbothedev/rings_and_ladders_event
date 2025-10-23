import { MapInteractionCSS } from 'react-map-interaction'
import { GameBoard } from '../components/GameBoard'
import { useState } from 'react'

export function HomePage(){
    const [mapState, setMapState] = useState({
        scale: 1,
        translation: { x: 0, y: 0 }
    })
    
    return (
        <div 
        >
            <MapInteractionCSS
            value={mapState}
            onChange={(value) => setMapState(value)}
            minScale={0.25}
            maxScale={2.0}
            >
            <div><GameBoard /></div>
            </MapInteractionCSS>
        </div>
    )
}