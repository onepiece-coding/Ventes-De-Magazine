/* eslint-disable react/prop-types */

import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const CategoriesList = ({ records, handleGetProductsByCategory }) => {
  const [categorie, setCategorie] = useState("All");

  const categoriesList = records.map((record) => {
    return (
      <ListGroup.Item
        key={record.id}
        as="li"
        active={categorie === record.categorie}
        disabled={categorie === record.categorie}
        onClick={() => {
          handleGetProductsByCategory(record.categorie);
          setCategorie(record.categorie);
        }}
      >
        {record.categorie}
      </ListGroup.Item>
    );
  });
  return (
    <ListGroup as="ul">
      <ListGroup.Item
        as="li"
        active={categorie === "All"}
        disabled={categorie === "All"}
        onClick={() => {
          handleGetProductsByCategory("");
          setCategorie("All");
        }}
      >
        All
      </ListGroup.Item>
      {categoriesList}
    </ListGroup>
  );
};

export default CategoriesList;
