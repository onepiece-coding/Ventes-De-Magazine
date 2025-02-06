/* eslint-disable react/prop-types */

import CategoriesSkeleton from "../Categories/CategoriesSkeleton";
import ProductsSkeleton from "../Products/ProductsSkeleton";
import ChartsSkeleton from "../Charts/ChartsSkeleton";
import styles from "./styles.module.css";

const Skeletons = {
  categories: CategoriesSkeleton,
  products: ProductsSkeleton,
  charts: ChartsSkeleton,
};

const Loading = ({ status, error, children, type }) => {
  const Skeleton = Skeletons[type];

  if (status === "pending") {
    return <Skeleton />;
  }

  if (status === "failed") {
    return <div className={styles.error}>{error}</div>;
  }

  return children;
};

export default Loading;
