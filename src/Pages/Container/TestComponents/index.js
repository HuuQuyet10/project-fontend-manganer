import React from 'react';
import ReactSilderImg from '../../Components/ReactSilderImg';
import { ChartColumns, ChartPie } from '../../Components';

const TestComponents = () => {
  const images = [
    'https://cdnmedia.baotintuc.vn/Upload/0gYjdiNY41wQIbPeRYyPvA/files/2023/05/Ukraine/ukraine-4.png',
    'https://cdnmedia.baotintuc.vn/Upload/0gYjdiNY41wQIbPeRYyPvA/files/2023/05/Ukraine/ukraine-2.png',
    'https://photo-baomoi.bmcdn.me/w700_r1/2023_05_06_65_45742668/d6cecae7b9aa50f409bb.jpg.webp',
    'https://cdnmedia.baotintuc.vn/Upload/0gYjdiNY41wQIbPeRYyPvA/files/2023/05/Ukraine/ukraine-2.png',
    'https://photo-baomoi.bmcdn.me/w700_r1/2023_05_06_65_45742668/d6cecae7b9aa50f409bb.jpg.webp',
    // ...
  ];
  const dataColums = [
    {
      category: "Research",
      value1: 1000,
      value2: 588
    },
    {
      category: "Marketing",
      value1: 1200,
      value2: 1800
    },
    {
      category: "Sales",
      value1: 850,
      value2: 1230
    }
  ];
  const dataPie = [
    {
      category: "Research",
      value1: 1000,
      // value2: 588
    },
    {
      category: "Marketing",
      value1: 1200,
      // value2: 1800
    },
    {
      category: "Sales",
      value1: 850,
      // value2: 1230
    },
    {
      category: "checckkk",
      value1: 2112,
      // value2: 1230
    }
  ];
  return (
    <div>
      <h1>k kkksksd</h1>
      <ReactSilderImg images={images} />
      <div style={{
        display: "grid",
        gridTemplateColumns: "50% 50%"
      }}>
        <ChartColumns props={dataColums} />
        <ChartPie props={dataPie} />
      </div>
    </div>
  );
}

export default TestComponents;
