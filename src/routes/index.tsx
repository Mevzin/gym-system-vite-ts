import { Login } from "@/pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const userAuth = false
export default function RoutesGym() {
    return (
        <BrowserRouter>
            <Routes>
                {userAuth ? (
                    <>
                        {/* <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} /> */}
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Login />} />
                        <Route path="*" element={<Login />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    )
}