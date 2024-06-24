import { ICellRendererParams } from "ag-grid-community"
import React from "react"

const ImageRenderer: React.FC<ICellRendererParams> = ({ value }) => (
    <div
        id="imageWrapper"
        style={{
            display: "flex",
            justifyContent: "",
            flexDirection: "column",
            padding: 10,
            height: "900px",
            border: "2px solid #000"
        }}
    >
        <img
            alt="Grid"
            src={value}
            style={{
                maxHeight: 700,
                objectFit: "contain",
                display: "block",
                marginBottom: 10
            }}
        />
    </div>
)

export default ImageRenderer
