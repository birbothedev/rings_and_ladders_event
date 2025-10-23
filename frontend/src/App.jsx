import { useState } from 'react'
import { MapInteractionCSS } from 'react-map-interaction'
import { GameBoard } from './components/GameBoard.jsx'

function App() {
  const [mapState, setMapState] = useState({
    scale: 1,
    translation: { x: 0, y: 0 }
  })

  return (
  <>
    <div className="w-screen h-screen overflow-hidden">
      <MapInteractionCSS
        value={mapState}
        onChange={(value) => setMapState(value)}
        minScale={0.25}
        maxScale={2.0}
      >
        <div><GameBoard /></div>
      </MapInteractionCSS>
    </div>
  </>
    
  )
}

export default App
