import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/products/productsSlice";
import Product from "./Product";
import Heading from "../Heading/Heading";
import Loading from "../Loading/Loading";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.products);

  const productsList = records.map((record) => {
    return (
      <Col md={6} lg={4} key={record.reference}>
        <Product {...record} />
      </Col>
    );
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Loading status={loading} error={error} type={"products"}>
      <section
        className="mb-4 border border-2 p-4 rounded"
        style={{ backgroundColor: "white" }}
      >
        <Heading title={"Liste des Produits"} />
        <Row className="row-gap-4">{productsList}</Row>
      </section>
    </Loading>
  );
};

export default Products;
