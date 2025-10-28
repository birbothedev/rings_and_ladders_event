import React, { useState } from 'react'

const Updates = () => {
    const [expanded, setIsExpanded] = useState(false)

    if (expanded) return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-110">
            <div className="w-2xl flex flex-col gap-2">
                <button className="text-2xl place-self-end cursor-pointer hover:bg-primary/40 rounded-full px-3 pt-1 pb-2 flex text-center items-center justify-center hover:text-darkblue" onClick={() => setIsExpanded(false)}>
                    ×
                </button>
                <div className="bg-border/80 p-4 rounded-2xl flex flex-col gap-4">
                    <div className="py-4 px-4 pl-1 rounded-full text-3xl font-bold">Updates and Announcements</div>
                    <div>
                        00d 00h 00m ago This is an example update or announcement<br />
                        00d 00h 00m ago This is an example update or announcement<br />
                        00d 00h 00m ago This is an example update or announcement<br />
                        00d 00h 00m ago This is an example update or announcement<br />
                        00d 00h 00m ago This is an example update or announcement<br />
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className="col-span-12 flex flex-col p-4 bg-primary/30 rounded-lg">
            <div className="flex justify-between">
                <span className="text-xl ">Updates and Announcements</span>
                <button 
                className="place-self-end hover:text-textmuted cursor-pointer"
                onClick={() => setIsExpanded(prev => !prev)}
                >
                    Expand
                </button>
            </div>
                <span className="text-md max-h-12 overflow-auto scrollbar-custom">
                    00d 00h 00m ago This is an example update or announcement<br />
                    00d 00h 00m ago This is an example update or announcement<br />
                    00d 00h 00m ago This is an example update or announcement<br />
                    00d 00h 00m ago This is an example update or announcement<br />
                    00d 00h 00m ago This is an example update or announcement<br />
                </span>
            </div>
        </>
    )
}

export default Updates