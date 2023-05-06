import React from 'react';
import ReactSilderImg from '../../Components/ReactSilderImg';

const TestComponents = () => {
    const images = [
        'https://cdnmedia.baotintuc.vn/Upload/0gYjdiNY41wQIbPeRYyPvA/files/2023/05/Ukraine/ukraine-4.png',
        'https://cdnmedia.baotintuc.vn/Upload/0gYjdiNY41wQIbPeRYyPvA/files/2023/05/Ukraine/ukraine-2.png',
        'https://photo-baomoi.bmcdn.me/w700_r1/2023_05_06_65_45742668/d6cecae7b9aa50f409bb.jpg.webp',
        // ...
    ];
    return (
        <div>
            <h1>k kkksksd</h1>
            <ReactSilderImg images={images} />
        </div>
    );
}

export default TestComponents;
