import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/categories/categoriesSlice";
import { getProducts } from "../../store/products/productsSlice";
import Heading from "../Heading/Heading";
import CategoriesList from "./CategoriesList";
import Loading from "../Loading/Loading";

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.categories);

  const handleGetProductsByCategory = (categorie) => {
    dispatch(getProducts(categorie));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Loading status={loading} error={error} type={"categories"}>
      <section
        className="mb-4 border border-2 p-4 rounded"
        style={{ backgroundColor: "white" }}
      >
        <Heading title={"Catégories"} />
        <CategoriesList
          records={records}
          handleGetProductsByCategory={handleGetProductsByCategory}
        />
      </section>
    </Loading>
  );
};

export default Categories;
