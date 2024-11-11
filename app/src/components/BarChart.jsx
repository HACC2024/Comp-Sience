// ./components/BarChart.js
import React, {useState, useEffect} from "react";
import { Bar } from "react-chartjs-2";
import axios from 'axios'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register the components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BASE_URL = "https://hacc-comp-sience-backend.vercel.app/api/appliances/energy-usage/"

const BarChart = ({ appliances }) => {
/*
    const [appliances, setAppliances] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAppliances = async () => {
            setLoading(true);
            try {
                const result = await fetchData();
                if (Array.isArray(result.appliance_list)) {
                    const filteredData = result.appliance_list.filter(appliance => appliance.is_on);
                    setAppliances(filteredData); // Update the appliances state
                } else {
                    console.error("Expected appliance_list to be an array.");
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getAppliances(); // Fetch data on page load
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    */
    
    const labels = appliances.map(appliance => appliance.name);
    const data = appliances.map(appliance => appliance.power_usage);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: "Power Usage",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: data,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                font: {
                    size: 20, // Set font size for x-axis labels
                }
            },
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        return value + "W";
                    }
                },
                font: {
                    size: 20, // Set font size for y-axis labels
                }
            }
        }
    }

    return (
        <div>
            <Bar data={chartData} options={options}/>
        </div>
    );
};
export default BarChart;