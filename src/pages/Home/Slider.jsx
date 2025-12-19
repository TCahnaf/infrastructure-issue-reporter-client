import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {

   

    const [currentIndex, setCurrentIndex] = useState(0);

    const imageArray = [
        '/images/nyc1.jpg',
        '/images/nyc2.webp',
        '/images/nyc3.webp',
        '/images/nyc4.webp',
        '/images/nyc5.webp']


    return (
        <div className="w-full max-w-3xl mx-auto relative ">
      <div className="overflow-hidden rounded-xl">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={imageArray[currentIndex]}
            className="w-full h-[400px] object-cover"
      
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {imageArray.map((image, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index ===  currentIndex? "bg-blue-600 w-4 h-4" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
    );
};


export default Slider;

