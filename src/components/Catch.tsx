import React from "react"

type ErrorHandler = (error: Error, info: React.ErrorInfo) => void
type ErrorHandlingComponent<Props> = (props: Props, error?: Error) => React.ReactNode

type ErrorState = { error?: Error }

export default function Catch<Props extends object>(
    component: ErrorHandlingComponent<Props>,
    errorHandler?: ErrorHandler
): React.ComponentType<Props> {
    // eslint-disable-next-line react/display-name
    return class extends React.Component<Props, ErrorState> {
        state: ErrorState = {
            error: undefined
        }

        componentDidCatch(error: Error, info: React.ErrorInfo) {
            if (errorHandler) {
                errorHandler(error, info)
            }
        }
        render() {
            return component(this.props, this.state.error)
        }
        // static getDerivedStateFromError(error: Error) {
        //     return { error }
        // }
    }
}
