import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

const {
  productsSkeleton,
  headingSkeleton,
  productImageSkeleton,
  productInfoSkeleton,
  producttitleSkeleton,
  productpriceSkeleton,
} = styles;

const ProductsSkeleton = () => {
  return (
    <div className={productsSkeleton}>
      <div className={headingSkeleton}></div>
      <Row className="row-gap-4">
        {Array(6)
          .fill(0)
          .map((_, index) => {
            return (
              <Col key={index} md={6} lg={4}>
                <div className={productImageSkeleton}></div>
                <div className={productInfoSkeleton}>
                  <div className={producttitleSkeleton}></div>
                  <div className={productpriceSkeleton}></div>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default ProductsSkeleton;
