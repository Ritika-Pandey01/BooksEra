import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Books</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/books/create-products")}
        >
          Add
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Products;
