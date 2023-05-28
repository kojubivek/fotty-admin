import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Chart = ({ title, data, datakey, grid }) => {
  return (
    <div className="chart shadow">
      <h3 className="chartTitle mb-3">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={datakey} stroke="#6c6c81"></XAxis>
          <Line type="monotone" stroke="#6c6c81" dataKey={datakey}></Line>
          <Tooltip />
          {grid && (
            <CartesianGrid stroke="rgb(194, 190, 190)" strokeDasharray="5.5" />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
