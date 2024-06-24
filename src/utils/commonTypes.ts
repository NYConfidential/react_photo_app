import type { ReactNode } from "react"

export type BinaryTreeOrderType = "ASC" | "DESC" | "LEFT" | "RIGHT"

export type ComponentChildrenTypes = {
    children: ReactNode
}

export type DispatchType = (action: any) => {}
