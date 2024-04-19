import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Platinum",
    value: 3,
    fill: "#8583ef",
  },
  {
    name: "Gold",
    value: 33,
    fill: "#cfdc43",
  },
  {
    name: "Silver",
    value: 13,
    fill: "#c5cfc9",
  },
];

const RechartsBarGraph = () => {
  return (
      <ResponsiveContainer width="100%" height={250}>
        <BarChart width={600} height={200} data={data} layout="vertical">
          <CartesianGrid horizontal={false} />
          <XAxis
            type="number"
            tickCount={8}
            tickLine={false}
            label={{
              value: "Number of Partners",
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis dataKey="name" type="category" tickLine={false} />
          <Bar layout="vertical" dataKey="value" />
          <Tooltip cursor={{ fill: "rgba(206, 206, 206, 0.2)" }} />
        </BarChart>
      </ResponsiveContainer>
  );
};

export default RechartsBarGraph;
