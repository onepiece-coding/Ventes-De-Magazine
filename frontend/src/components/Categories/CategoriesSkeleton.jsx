import styles from "./styles.module.css";

const { categoriesSkeleton, headingSkeleton, categorieItemSkeleton } = styles;

const CategoriesSkeleton = () => {
  return (
    <div className={categoriesSkeleton}>
      <div className={headingSkeleton}></div>
      <div>
        {Array(4)
          .fill(0)
          .map((_, index) => {
            return <div key={index} className={categorieItemSkeleton}></div>;
          })}
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
