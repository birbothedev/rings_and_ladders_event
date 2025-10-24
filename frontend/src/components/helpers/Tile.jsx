

export function Tile({ x, y, letter }){
    return (
        <div 
            className={`w-[200px] h-[200px] bg-(--danger) rounded-full absolute 
                flex items-center justify-center`}
            style={{ left: `${x}px`, top: `${y}px` }}
        >
            <h3 className="text-[80px] leading-none">{letter}</h3>
        </div>
    )
}