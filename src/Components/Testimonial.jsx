import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Testimonialarray from './Testimonial-array';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

function Testimonial() {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === Testimonialarray.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? Testimonialarray.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto lg:px-5 px-1">
      <div className="flex justify-between items-center mb-4 h-[24rem]">
        <button className="lg:text-3xl text-xs md:text-2xl" onClick={prevTestimonial}>
          <GrLinkPrevious />
        </button>
        <AnimatePresence mode="wait">
          <motion.div
            key={Testimonialarray[current].id}
            initial={{ opacity: 0, x:10}}
            animate={{ opacity: 1, x: 0}}
            exit={{ opacity: 0, x:-10}}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="lg:max-w-2xl md:max-w-lg max-w-sm mx-auto">
              <img
                src="/Images/testimonial-img.svg"
                alt="testimonial"
                className="inline-block md:w-6 w-4 lg:w-8 lg:h-8 text-gray-400 mb-8"
              />
              <p className="leading-relaxed lg:text-lg text-xs md:text-sm">
                {t(Testimonialarray[current].comment)}
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                {t(Testimonialarray[current].name)}
              </h2>
              <p className="text-gray-500">{t(Testimonialarray[current].post)}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <button className="lg:text-3xl text-xs md:text-2xl" onClick={nextTestimonial}>
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
