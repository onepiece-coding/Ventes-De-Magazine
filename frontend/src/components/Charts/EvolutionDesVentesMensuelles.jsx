/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "#111111";

const EvolutionDesVentesMensuelles = ({ products }) => {
  return (
    <div
      className="border border-2 p-4 rounded"
      style={{ backgroundColor: "white" }}
    >
      <Line
        height={"270px"}
        data={{
          labels: [
            "Jan",
            "Fév",
            "Mar",
            "Avr",
            "Mai",
            "Juin",
            "Juil",
            "Août",
            "Sep",
            "Oct",
            "Nov",
            "Déc",
          ],
          datasets: products.map((record) => {
            return {
              label: record.nom,
              data: record.ventes_mensuelles,
            };
          }),
        }}
        options={{
          plugins: {
            title: {
              text: "Évolution des Ventes Mensuelles",
            },
          },
        }}
      />
    </div>
  );
};

export default EvolutionDesVentesMensuelles;
