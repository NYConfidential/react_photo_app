import type { GridOptions } from "ag-grid-community"

const defaultGridOption: GridOptions = {
    defaultColDef: {
        flex: 1,
        sortable: true,
        resizable: true,
        filter: true,
        wrapText: true,
        headerClass: "custom-header",
        autoHeight: true
    },
    rowSelection: "single",
    headerHeight: 30
}

export default defaultGridOption
