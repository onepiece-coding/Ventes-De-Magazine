import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

const { chartItemSkeleton, chartTitleSkeleton, chartDescSkeleton } = styles;

const ChartsSkeleton = () => {
  return (
    <Row className="row-gap-4">
      <Col lg={6}>
        <div className={chartItemSkeleton}>
          <div className={chartTitleSkeleton}></div>
          <div className={chartDescSkeleton}></div>
        </div>
      </Col>
      <Col lg={6}>
        <div className={chartItemSkeleton}>
          <div className={chartTitleSkeleton}></div>
          <div className={chartDescSkeleton}></div>
        </div>
      </Col>
    </Row>
  );
};

export default ChartsSkeleton;
