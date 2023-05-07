import React, { useState } from 'react';
import './style.css';

const ReactSilderImg = ({ images }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setZoomLevel(1);
    };

    const goToPrevious = () => {
        setDirection('previous');
        setCurrentImageIndex((prevIndex) => prevIndex - 1);
        setZoomLevel(1);
    };

    const goToNext = () => {
        setDirection('next');
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
        setZoomLevel(1);
    };

    const isFirstImage = currentImageIndex === 0;
    const isLastImage = currentImageIndex === images.length - 1;

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closeLightbox();
        }
    };

    const handleZoomIn = () => {
        setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.1);
    };

    const handleZoomOut = () => {
        setZoomLevel((prevZoomLevel) => prevZoomLevel - 0.1);
    };

    const handleScroll = (event) => {
        if (event.deltaY < 0 && zoomLevel < 2) {
            // Zoom in
            handleZoomIn();
        } else if (event.deltaY > 0 && zoomLevel > 0.2) {
            // Zoom out
            handleZoomOut();
        }
    };

    return (
        <div>
            <div className="gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        onClick={() => openLightbox(index)}
                    />
                ))}
            </div>

            {isOpen && (
                <div className={`lightbox ${direction}`} onClick={handleOverlayClick}>
                    <button className="close-button" onClick={closeLightbox}>
                        Close
                    </button>
                    <button className="previous-button" onClick={goToPrevious} disabled={isFirstImage}>
                        Previous
                    </button>
                    <div className="image-container" onWheel={handleScroll}>
                        <img
                            src={images[currentImageIndex]}
                            alt={`Image ${currentImageIndex}`}
                            style={{ transform: `scale(${zoomLevel})` }}
                        />
                    </div>
                    <button className="next-button" onClick={goToNext} disabled={isLastImage}>
                        Next
                    </button>
                    {/* <div className="zoom-controls">
                        <button className="zoom-in-button" onClick={handleZoomIn}>
                            Zoom In
                        </button>
                        <button className="zoom-out-button" onClick={handleZoomOut}>
                            Zoom Out
                        </button>
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default ReactSilderImg;
