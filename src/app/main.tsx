import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { StableNavigateContextProvider } from "../context/StableNavigateContext"
import { store } from "../redux/store"

import App from "./App"
import ErrorBoundary from "../components/ErrorBoundary"
import React from "react"
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <ErrorBoundary>
                <StableNavigateContextProvider>
                    {/*<AppConsoleContextProvider>*/}
                    <App />
                    {/*</AppConsoleContextProvider>*/}
                </StableNavigateContextProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>
    // </React.StrictMode>,
)
