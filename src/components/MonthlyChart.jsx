import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Week 1", amount: 580, pv: 2400, amt: 2400 },
  { name: "Week 2", amount: 620, pv: 1398, amt: 2210 },
  { name: "Week 3", amount: 750, pv: 9800, amt: 2290 },
  { name: "Week 4", amount: 500, pv: 3908, amt: 2000 },
];

const MonthlyChart = () => {
  return (
    <div
      className="d-flex justify-content-center "
      style={{
        width: "100%",
      }}
    >
      <BarChart width={550} height={320} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="amount" fill="#8884d8" barSize={90} />
      </BarChart>
    </div>
  );
};

export default MonthlyChart;
