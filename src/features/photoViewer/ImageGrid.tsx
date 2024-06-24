import "./print.css"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { AgGridReact } from "ag-grid-react"
import { ColDef, GridApi } from "ag-grid-community"
import FileUploader from "./FileUploader" // Import the print styles
import ImageRenderer from "./ImageRenderer"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

const ImageGrid: React.FC = () => {
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [gridApi, setGridApi] = useState<GridApi | null>(null)
    const gridRef = useRef<AgGridReact>(null)
    const containerStyle = useMemo(() => ({ width: "1000px", height: "100%" }), [])

    const defaultColDef = useMemo<ColDef>(() => {
        return {
            minWidth: 300
        }
    }, [])

    const columnDefs: ColDef[] = [
        {
            headerName: "Image 1",
            field: "image1",
            cellRenderer: ImageRenderer,
            autoHeight: true,
            width: 300
        },
        {
            headerName: "Image 2",
            field: "image2",
            cellRenderer: ImageRenderer,
            autoHeight: true,
            width: 300
        },
        {
            headerName: "Image 3",
            field: "image3",
            cellRenderer: ImageRenderer,
            autoHeight: true,
            width: 300
        },
        {
            headerName: "Image 4",
            field: "image4",
            cellRenderer: ImageRenderer,
            autoHeight: true,
            width: 300
        }
    ]

    const rowData = imageUrls.reduce((rows, url, index) => {
        const rowIndex = Math.floor(index / 4)
        if (!rows[rowIndex]) rows[rowIndex] = {}
        rows[rowIndex][`image${(index % 4) + 1}`] = url
        return rows
    }, [] as any[])

    const handleFilesSelected = (files: FileList | null) => {
        if (files) {
            const urls = Array.from(files).map((file) => URL.createObjectURL(file))
            setImageUrls(urls)
        }
    }
    const onBtPrinterFriendly = useCallback(() => {
        var eGridDiv = document.querySelector<HTMLElement>("#myGrid")! as any
        eGridDiv.style.width = ""
        eGridDiv.style.height = ""
        gridRef.current!.api.setGridOption("domLayout", "print")
    }, [])

    const onGridReady = (params: { api: GridApi }) => {
        setGridApi(params.api)
        params.api.sizeColumnsToFit()
        onBtPrinterFriendly()
    }

    useEffect(() => {
        if (gridApi) {
            const allColumnIds = gridApi.getColumns()?.map((column) => column.getColId()) || []
            gridApi.autoSizeColumns(allColumnIds)
            onBtPrinterFriendly()
        }
    }, [rowData, gridApi, onBtPrinterFriendly])

    const handlePrint = () => {
        if (gridApi) {
            gridApi.sizeColumnsToFit()
        }
        window.print()
    }

    return (
        <div style={containerStyle}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <FileUploader onFilesSelected={handleFilesSelected} />
                <button onClick={handlePrint} style={{ marginLeft: "10px" }}>
                    Print Grid
                </button>
                <button onClick={onBtPrinterFriendly}>Printer Friendly Layout</button>
            </div>
            <div className="ag-theme-alpine" id="myGrid">
                <AgGridReact
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                    ref={gridRef}
                    rowData={rowData}
                />
            </div>
        </div>
    )
}

export default ImageGrid
