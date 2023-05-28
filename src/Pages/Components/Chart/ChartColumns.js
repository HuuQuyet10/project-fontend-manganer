import React, { useEffect, useRef } from "react";
// import "./styles.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const ChartColumns = (props) => {
    const chartRef = useRef(null);
    useEffect(() => {
        // if (!props.props.data || !props.props.data.length) {
        //   return; // Exit early if data is undefined or empty
        // }
        const data = props.props;
        let root = am5.Root.new(chartRef.current);

        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: false,
                layout: root.verticalLayout
            })
        );

        // Create Y-axis
        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        // Create X-Axis
        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {}),
                categoryField: "category"
            })
        );
        xAxis.data.setAll(data);

        // Create series
        let series1 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "value1",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value1",
                categoryXField: "category"
            })
        );
        series1.data.setAll(data);

        let series2 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "value2",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value2",
                categoryXField: "category"
            })
        );
        series2.data.setAll(data);

        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 15,
            marginBottom: 15
        }));
        legend.data.setAll(chart.series.values);

        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {}));

        return () => {
            if (root) {
                root.dispose();
            }
        };
    }, [props]);

    return <div ref={chartRef} id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default ChartColumns;
