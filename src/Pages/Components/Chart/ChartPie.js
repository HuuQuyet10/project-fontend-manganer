import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const ChartPie = (props) => {
    const chartRef = useRef(null);
    useEffect(() => {
        const data = props.props;
        let root = am5.Root.new(chartRef.current);
        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                layout: root.verticalLayout
            })
        );
        let series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value1",
            categoryField: "category"
          }));
        series.data.setAll(data);

        var legend = chart.children.push(am5.Legend.new(root, {
            // căn chỉnh vị trí patiaction
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 15,
            marginBottom: 15
        }));
        legend.data.setAll(series.dataItems);

        return () => {
            if (root) {
                root.dispose();
            }
        };
    }, [props])
    return (
        <div ref={chartRef} id="chartdiv" style={{ width: "100%", height: "800px" }}></div>
    );
};

export default ChartPie;
