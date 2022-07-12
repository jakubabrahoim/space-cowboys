import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

let image = require('../../assets/galleryImage.png');
let images: any[] = [image, image, image, image, image, image, image, image, image, image, image, image];

function Gallery() {
    
    let [toggler, setToggler] = useState(false);
    let [currentSlide, setCurrentSlide] = useState(1);
    
    function openLightbox(index: number): void {
        setToggler(!toggler);
        setCurrentSlide(index);
    }

    return (
        
        <section id='impressions' className='bg-gray-800 h-auto'>
            <div className='flex flex-col items-center'>
                <h2 className='text-3xl text-center font-bold text-white mx-20 mt-12'>LOOK AT ALL THOSE STARS</h2>
                <p className='text-gray-100 text-center mx-4 mt-4'>
                    Some impressions from out trips to frickin outer space, enjoy!
                </p>
            </div>
            
            <div className='grid grid-cols-3 xl:grid-cols-4 items-center justify-items-center mx-12 mt-24 pb-24'>
                {images.map((image, index) => {
                    return (
                        <img 
                            key={index} 
                            src={image} 
                            alt='galaxy' 
                            onClick={() => openLightbox(index + 1)} 
                            className='w-[90px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] mx-4 my-4 aspect-square object-cover'
                        />
                    );
                })}
            </div>

            <FsLightbox
                toggler={toggler}
                slide={currentSlide}
                sources={images}
            />

        </section>
    )
}

export default Gallery;