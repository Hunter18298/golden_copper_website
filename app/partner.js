import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper/core';

// Install Swiper modules
SwiperCore.use([Autoplay]);

export default function PartnersSection() {
    return (
        <section className="py-12 bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Partners</h2>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mt-8"
                >
                    <SwiperSlide>
                        <img src="/partner-1.png" alt="Partner 1" className="mx-auto shadow-lg rounded-lg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/partner-2.png" alt="Partner 2" className="mx-auto shadow-lg rounded-lg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/partner-3.jpeg" alt="Partner 3" className="mx-auto shadow-lg rounded-lg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
