import React from 'react'

const GridGameboard = () => {
    const tiles = 484 // or 529
    const tilesGroup = []

    for (let i=0; i<tiles; i++){
        tilesGroup.push({
            name: `tile ${i}`
        })
    }

    return (
        <div 
            className="w-full h-full p-4 grid grid-cols-20 grid-rows-20 gap-4"
            style={{
                gridTemplateColumns: `repeat(22, 100px)`,
                gridTemplateRows: `repeat(22, 100px)`
            }}
        >
            {tilesGroup.map((t, i) => (
                <div 
                    className="border-2 border-amber-700 rounded-lg text-center flex items-center justify-center"
                    key={i}
                >{t.name}</div>
            ))}
        </div>
    )
}

export default GridGameboard