import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import "./style.scss";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ColumnChart = (props) => {
  const { data } = props;
  const mappedData = data.map((item) => {
    return {
      label: item.name,
      y: parseInt(item.value),
    };
  });
  const options = {
    title: {
      text: "NFT Purchase Summary by Time Period"
    },
    creditText: null,
    data: [{
      type: "column",
      dataPoints: mappedData
    }]
  }
  return (
    <div>
      <CanvasJSChart options={options}/>
    </div>
  );
}

export default ColumnChart;
