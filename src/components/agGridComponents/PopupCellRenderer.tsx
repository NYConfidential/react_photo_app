// CustomCellRenderer.tsx
import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import type { ICellRendererParams } from "ag-grid-community"
import type React from "react"

interface IPopupCellRenderer extends ICellRendererParams {
    headerText: string
    buttonVariant: string
}

const PopupCellRenderer: React.FC<IPopupCellRenderer> = (params) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const { value, headerText, data, buttonVariant } = params

    const handleCellClick = () => {
        setIsPopupOpen(true)
    }

    const closePopup = () => {
        setIsPopupOpen(false)
    }

    return (
        <>
            <Button className="custom-button" onClick={() => handleCellClick()} variant={buttonVariant}>
                {value}
            </Button>

            <Modal aria-labelledby="example-custom-modal-styling-title" onHide={() => closePopup()} show={isPopupOpen}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">{headerText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PopupCellRenderer
