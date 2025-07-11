import { Pie, PieChart, Tooltip, Cell } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  { name: "Page A", uv: 450 },
  { name: "Page B", uv: 320 },
  { name: "Page C", uv: 180 },
  { name: "Page D", uv: 380 },
  { name: "Page E", uv: 240 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

const MyPieChart = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100  ">
      <PieChart width={250} height={250}>
        <Pie data={data} dataKey="uv" outerRadius={100} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
