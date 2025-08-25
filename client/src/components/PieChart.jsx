import { Pie, PieChart, Tooltip, Cell } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import NoData from "./NoData";
import axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000";
const MyPieChart = () => {
  const [categoryChart, setCategoryChart] = useState([]);
  useEffect(() => {
    async function fetchCategoryChart() {
      try {
        const response = await axios.get(
          `${apiUrl}/expense/get-category-spent-chart`,
          {
            withCredentials: true,
          }
        );
        const chartData = response.data.data.map((item) => ({
          ...item,
          amount: Number(item.amount),
        }));
        setCategoryChart(chartData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategoryChart();
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center h-100  ">
      {categoryChart.length === 0 ? (
        <NoData />
      ) : (
        <PieChart width={250} height={250}>
          <Pie
            data={categoryChart}
            dataKey="amount"
            outerRadius={100}
            fill="#8884d8"
          >
            {categoryChart.map((entry, index) => (
              <Cell key={index} fill={entry.category_color || "#8884d8"} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
};

export default MyPieChart;
