import React from "react";
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
} from "recharts";
import './chartrevenue.css';

function ChartRevenue({ chartData }) {
    const data = [
        { name: "Dog Food", product: 77000 },
        { name: "Cat Food", product: 65000 },
        { name: "Bird Food", product: 10000 },
        { name: "Other", product: 50000 },
    ];

    return (
        <div className="container-chart-renevue" style={{ textAlign: "center" }}>
            <h2>Graph of products sold</h2>
            <div className="chart-line">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 80,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis
                        dataKey="name"
                        scale="point"
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar
                        dataKey="product"
                        fill="#8884d8"
                        background={{ fill: "#eee" }}
                    />
                </BarChart>
            </div>
        </div>
    );
}

export default ChartRevenue;
