import { Routes, Route, BrowserRouter } from "react-router";

// Routes
import { Home } from '../pages/Home';
import { Product } from "../pages/Products";
import { NotFound } from "../pages/NotFound";
import { Layout } from "../layout/Layout";


export function RoutingSystem() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/product" element={<Product />} />
                </Route>
                    <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}