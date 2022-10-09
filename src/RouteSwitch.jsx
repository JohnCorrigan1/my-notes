import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Components from "./components/ui/Components"

const RouteSwitch = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/components" element={<Components />} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;