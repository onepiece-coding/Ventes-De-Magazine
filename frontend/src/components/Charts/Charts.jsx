import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import EvolutionDesVentesMensuelles from "./EvolutionDesVentesMensuelles";
import RepartitionDuChiffreDaffaires from "./RepartitionDuChiffreDaffaires";
import Loading from "../Loading/Loading";

const Charts = () => {
  const { loading, error, records } = useSelector((state) => state.products);

  return (
    <Loading status={loading} error={error} type={"charts"}>
      <section>
        <Row className="row-gap-4">
          <Col lg={6}>
            <EvolutionDesVentesMensuelles products={records} />
          </Col>
          <Col lg={6}>
            <RepartitionDuChiffreDaffaires products={records} />
          </Col>
        </Row>
      </section>
    </Loading>
  );
};

export default Charts;
