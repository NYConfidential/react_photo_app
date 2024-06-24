// FileUploader.tsx
import { useRef } from "react"
import type React from "react"

interface FileUploaderProps {
    onFilesSelected: (files: FileList | null) => void
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFilesSelected }) => {
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        onFilesSelected(files)
    }

    const handleButtonClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Select Images</button>
            <input
                accept="image/*"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
                type="file"
            />
        </div>
    )
}

export default FileUploader
