import type React from "react"

const CustomTextCellRenderer = (params: {
    value:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined
}) => {
    return <text>{params.value}</text>
}

export default CustomTextCellRenderer
