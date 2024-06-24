import { createContext, useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import type { ComponentChildrenTypes } from "../../utils/commonTypes"
import type { MutableRefObject } from "react"
import type { NavigateFunction } from "react-router-dom"

const StableNavigateContext = createContext<MutableRefObject<NavigateFunction> | null>(null)

const StableNavigateContextProvider = ({ children }: ComponentChildrenTypes) => {
    const navigate = useNavigate()
    const navigateRef = useRef(navigate)

    return <StableNavigateContext.Provider value={navigateRef}>{children}</StableNavigateContext.Provider>
}

const useStableNavigate = (): NavigateFunction => {
    const navigateRef = useContext(StableNavigateContext)
    if (!navigateRef || navigateRef.current === null) {
        throw new Error("StableNavigate context is not initialized")
    }

    return navigateRef.current
}

export { StableNavigateContext, StableNavigateContextProvider, useStableNavigate }
