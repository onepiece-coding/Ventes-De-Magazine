/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const RepartitionDuChiffreDaffaires = ({ products }) => {
  return (
    <div
      className="border border-2 p-4 rounded"
      style={{ backgroundColor: "white" }}
    >
      <Doughnut
        data={{
          labels: products.map((record) => record.nom),
          datasets: [
            {
              label: "Count",
              data: products.map((record) => record.prix),
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Répartition du Chiffre d'Affaires",
            },
          },
        }}
      />
    </div>
  );
};

export default RepartitionDuChiffreDaffaires;
