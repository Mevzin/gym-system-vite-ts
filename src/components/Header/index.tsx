import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex gap-10 h-10 border-b-[1px] items-center justify-between mb-3 px-4">
            <div>
                <h1 className="font-bold text-2xl">Gym System</h1>
            </div>
            <div className="flex gap-6 h-10 border-b-[1px] items-center">
                <Link className="hover:underline" to="/dashboard">Dashboard</Link>
                <Link className="hover:underline" to="/users">Usuários</Link>
                <Link className="hover:underline" to="/dashboard">Planos</Link>
                <Link className="hover:underline" to="/dashboard">Edição</Link>
            </div>
        </header>
    )
}

export default Header