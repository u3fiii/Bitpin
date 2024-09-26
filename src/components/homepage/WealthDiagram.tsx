import { LineChart, Line, XAxis } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 2000,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4500,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 2500,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 1500,
  },
];

export default function App() {
  return (
    <div className="chart-container">
      {" "}
      {/* Wrap LineChart in this div */}
      <LineChart width={120} height={60} data={data} className="line-chart">
        <Line
          className="line"
          type="monotone"
          dataKey="pv"
          stroke="#4EF09D"
          strokeWidth={2}
          dot={false}
        />
        <XAxis tick={false} axisLine={false} /> {/* Disable ticks and labels */}
      </LineChart>
    </div>
  );
}
