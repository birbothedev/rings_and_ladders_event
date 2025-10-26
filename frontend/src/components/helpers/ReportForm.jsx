import { useState } from "react"

export function ReportForm({ isOpen, onClose }){
    const [formContent, setFormContent] = useState({
        subject: "",
        description: "",
    })
    const [file, setFile] = useState(null)
    const [filePreview, setFilePreview] = useState(null)

    const longlimit = 500
    const shortlimit = 50

    const handleChange = (e) => {
        const {name, value, maxLength, tagName} = e.target
        setFormContent((prev) => ({
            ...prev,
            [name]: value.slice(0, maxLength)
        }))

        if (tagName === "TEXTAREA") {
            e.target.style.height = "auto"
            e.target.style.height = e.target.scrollHeight + "px"
        }
    }

    const handleMediaChange = (e) => {
        const selectedFile= e.target.files[0]
        if(selectedFile) setFile(selectedFile)

        setFilePreview(URL.createObjectURL(selectedFile))
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-110">
            <div className="w-2xl flex flex-col gap-2">
                <button className="text-2xl place-self-end cursor-pointer hover:bg-primary/40 rounded-full px-3 pt-1 pb-2 flex text-center items-center justify-center hover:text-darkblue" onClick={onClose}>
                    ×
                </button>
                <div className="bg-border/20 p-4 rounded-2xl flex flex-col gap-4">
                    <div className="py-4 px-4 pl-1 rounded-full text-3xl font-bold">Report an Issue</div>
                    <form className="border-bordermuted border-3 rounded-2xl p-4 text-md flex flex-col gap-4">
                        <>
                            <label className="flex justify-between items-center gap-2">
                                <span>Subject:</span>
                                <span className="text-sm text-gray-500">
                                    {formContent.subject.length}/{shortlimit}
                                </span>
                            </label>
                            <input 
                                className="border-bordermuted border rounded-2xl p-3" 
                                type="text"
                                maxLength={shortlimit}
                                name="subject"
                                placeholder="Enter Subject"
                                value={formContent.subject}
                                onChange={handleChange}
                            />
                        </>
                        <>
                            <label className="flex justify-between items-center gap-2">
                                <span>Description:</span>
                                <span className="text-sm text-gray-500">
                                    {formContent.description.length}/{longlimit}
                                </span>
                            </label>
                            <textarea 
                                className="border-bordermuted border rounded-2xl p-3 overflow-hidden resize-none" 
                                maxLength={longlimit}
                                placeholder="Enter a description of the issue"
                                rows={3}
                                name="description"
                                value={formContent.description}
                                onChange={handleChange}
                            />
                        </>
                        <>
                            <label className="flex justify-between items-center gap-2">
                                <span>Upload Image or File:</span>
                            </label>
                            <input 
                                className="border-bordermuted border rounded-2xl p-3 cursor-pointer" 
                                type="file"
                                name="media"
                                accept=".png,.jpg,.jpeg,.mp4,.mov,.txt,.log"
                                onChange={handleMediaChange}
                            />
                        </>
                        {filePreview && (
                            <div className="mt-2">
                                {file.type.startsWith("image") ? (
                                <img src={filePreview} alt="preview" className="max-w-full rounded-lg" />
                                ) : (
                                <video src={filePreview} controls className="max-w-full rounded-lg" />
                                )}
                            </div>
                        )}
                    </form>
                    <button className="text-xl place-self-end cursor-pointer hover:bg-primary/40 rounded-full px-3 pt-1 pb-2 flex text-center items-center justify-center hover:text-darkblue" 
                    onClick={onClose}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}