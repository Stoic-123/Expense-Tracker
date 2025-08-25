import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./lineChart.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const apiUrl =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000";
const MyLineChart = () => {
  const [dailySpend, setDailySpent] = useState([]);
  useEffect(() => {
    async function fetchDailySpendingGraph() {
      try {
        const response = await axios.get(
          `${apiUrl}/expense/get-daily-spent-chart`,
          {
            withCredentials: true,
          }
        );
        setDailySpent(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDailySpendingGraph();
  }, []);
  return (
    <div
      className="d-flex justify-content-center "
      style={{
        width: "100%",
      }}
    >
      <LineChart
        width={600}
        height={370}
        data={dailySpend}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="dodgerblue"
          strokeWidth={2}
        />
        <XAxis dataKey="day" />
        <YAxis width="auto" label={{ position: "insideLeft", angle: -90 }} />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default MyLineChart;
