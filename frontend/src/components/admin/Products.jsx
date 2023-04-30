import { Outlet, useNavigate } from "react-router-dom";

function Products() {
    const navigate = useNavigate();

    return ( <>
        Products
        <button onClick={() => navigate("/admin/products/create-products")}>
        Create
        </button>
        <Outlet/>
    </> );
}

export default Products;