import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex gap-10 h-10 border-b-[1px] items-center justify-between mb-3 px-4">
            <div>
                <h1 className="font-bold text-2xl">Gym System</h1>
            </div>
            <div className="flex gap-6 h-10 border-b-[1px] items-center">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/dashboard">Treinos</Link>
                <Link to="/dashboard">Alunos</Link>
                <Link to="/dashboard">Planos</Link>
                <Link to="/dashboard">Edição</Link>
            </div>
        </header>
    )
}

export default Header