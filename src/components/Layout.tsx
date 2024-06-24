import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div style={{ margin: 0, padding: 0, height: "90vh", width: "100vw" }}>
            <div className="m-1" style={{ height: "100%", width: "auto" }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
