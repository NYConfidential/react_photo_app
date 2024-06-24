import "./App.css"
import { Route, Routes } from "react-router-dom"
import ImageGrid from "../features/photoViewer/ImageGrid"
import Layout from "../components/Layout"
import React from "react"

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route element={<Layout />} path="/">
                    <Route
                        element={
                            <div>
                                <ImageGrid />
                            </div>
                        }
                        index
                    />
                </Route>
            </Routes>
        </div>
    )
}

export default React.memo(App)
