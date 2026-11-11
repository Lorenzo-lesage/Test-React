import { Link, Outlet } from 'react-router';

export function Layout() {
    return (
        <div className="h-min-screem">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                </ul>
            </nav>

               <main>
                <Outlet />
            </main>

        </div>
    )
}