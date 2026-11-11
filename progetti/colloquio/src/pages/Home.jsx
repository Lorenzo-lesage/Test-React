import { Link } from "react-router";

export function Home() {
    return (
        <div className="py-5 flex justify-center">
            <div className="py-5 flex justify-center">
                <h1>Home</h1>
            </div>

            <div>
                <Link to="/table" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Tabella
                </Link>

            </div>

        </div>
    )
}