import { useState, useRef, type FC } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndexRef = useRef<number>(0);

  const goToPrevious = () => {
    prevIndexRef.current = currentIndex;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    prevIndexRef.current = currentIndex;
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`relative carousel flex flex-col items-center justify-center w-full h-full transition-transform duration-500`}>
      <div className="z-10 absolute top-0 left-0 w-full h-full bg-black opacity-20 pointer-events-none"></div>
      {images.map((image, index) => (
        <img key={index} src={image} className={`absolute w-full h-full object-cover ${index === currentIndex ? 'current' : 'next'}`} />
      ))}
      <button onClick={goToPrevious} className="z-20 absolute left-0 text-white opacity-70 hover:opacity-100 hover:scale-90 transition-all">
        <svg width="70" height="70" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 6l-6 6l6 6"></path>
        </svg>
      </button>
      <button onClick={goToNext} className="z-20 absolute right-0 text-white opacity-70 hover:opacity-100 hover:scale-90 transition-all">
        <svg width="70" height="70" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
