import Catch from "./Catch"
import type React from "react"

type Props = {
    children: React.ReactNode
}

const ErrorBoundary = Catch(function MyErrorBoundary(props: Props, error?: Error) {
    if (error) {
        return (
            <div className="error-screen">
                <h2>An error has occured</h2>
                <h4>{error.stack}</h4>
            </div>
        )
    } else {
        return <>{props.children}</>
    }
})

export default ErrorBoundary
