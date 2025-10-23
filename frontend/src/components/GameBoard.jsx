import { Tile } from "./Tile";

export function GameBoard(){
    const boardPieces = [
        {
            x: 200,
            y: 200,
            letter: "A",
        },
        {
            x: 500,
            y: 350,
            letter: "B",
        },
        {
            x: -200,
            y: 200,
            letter: "C",
        },
    ]

    const renderBoardPieces = () => {
        return boardPieces.map((tile, index) => (
            <Tile key={index} x={tile.x} y={tile.y} letter={tile.letter}/>
        ))
    }
    return (
        <div className="relative">
            {renderBoardPieces()}
        </div>
    )
}