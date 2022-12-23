import React from "react";
import {Bar} from "react-chartjs-2";
import {chart as ChartJS} from "chart.js/auto"

function Barchart({chartData}){
    // console.log(chartData.datasets[0].data.length)
    if((!chartData.datasets[0].data.length)){
        return;
    }
    else{
        return (
        <div style={{ position: "relative", margin: "auto" ,width:"auto"}}>
            <Bar data={chartData} options={{ responsive: true }} />
            </div>
            );
    }
    
}

export default Barchart;