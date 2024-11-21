import React from 'react';
import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";

import LightGallery from "lightgallery/react";

// Import CSS for LightGallery and plugins
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

// Import the required plugins directly
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
    const images = [
        GalleryImg1,
        GalleryImg3,
        GalleryImg4,
        GalleryImg6,
        GalleryImg7
    ];

    return (
        <div className="container">
            <div className="row">
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]} // Pass plugins correctly
                >
                    {images.map((img, index) => (
                        <a href={img} key={index} className="col-6 col-md-4 col-lg-3 mb-4">
                            <img 
                                src={img} 
                                alt={`Gallery ${index}`} 
                                className="img-fluid rounded"
                            />
                        </a>
                    ))}
                </LightGallery>
            </div>
        </div>
    );
};

export default Gallery;
