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
const data = [
  { name: "Jan 1", amount: 45, pv: 2400, amt: 2400 },
  { name: "Jan 2", amount: 78, pv: 1398, amt: 2210 },
  { name: "Jan 3", amount: 32, pv: 9800, amt: 2290 },
  { name: "Jan 4", amount: 95, pv: 3908, amt: 2000 },
  { name: "Jan 5", amount: 67, pv: 3908, amt: 2000 },
  { name: "Jan 6", amount: 123, pv: 3908, amt: 2000 },
  { name: "Jan 7", amount: 89, pv: 3908, amt: 2000 },
];

const MyLineChart = () => (
  <div
    className="d-flex justify-content-center "
    style={{
      width: "100%",
    }}
  >
    <LineChart
      width={600}
      height={370}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="amount" stroke="dodgerblue" strokeWidth={2} />
      <XAxis dataKey="name" />
      <YAxis width="auto" label={{ position: "insideLeft", angle: -90 }} />
      <Tooltip />
    </LineChart>
  </div>
);

export default MyLineChart;
