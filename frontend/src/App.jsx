import { Container } from "react-bootstrap";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Charts from "./components/Charts/Charts";

function App() {
  return (
    <Container className="py-5">
      <Categories />
      <Products />
      <Charts />
    </Container>
  );
}

export default App;
