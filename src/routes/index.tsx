import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Users from "@/pages/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const userAuth = true
export default function RoutesGym() {
    return (
        <BrowserRouter>
            <Routes>
                {userAuth ? (
                    <>
                        <Route path="*" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
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