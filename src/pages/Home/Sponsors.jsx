import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import sponsor1 from '../../../public/images/sponsor1.svg'
 import sponsor2 from '../../../public/images/sponsor2.gif'
import sponsor3 from '../../../public/images/sponsor3.jpeg'
import sponsor4 from '../../../public/images/sponsor4.jpeg'
import sponsor5 from '../../../public/images/sponsor5.jpeg'

const sponsors = [sponsor1,sponsor2, sponsor3, sponsor4, sponsor5, sponsor1, sponsor2, sponsor3, sponsor4];

const Sponsors = () => {
    return (
       <div className="w-full h-18 lg:h-64 py-10 overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                loop={true}
               
                slidesPerView={3}
                breakpoints={{
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 }
                }}
                spaceBetween={50}
                speed={5000} 
                centeredSlides={true}
                observer={true}
                observeParents={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, 
                }}
                className="[&>.swiper-wrapper]:transition-timing-function-linear"
            >
                {sponsors.map((logo, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <img 
                            className='h-[60px] w-[120px]  transition-all duration-500' 
                            src={logo} 
                            alt="" 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <style>{`
                .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </div>
    );
};

export default Sponsors;