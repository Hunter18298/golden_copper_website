// Import necessary libraries and components
"use client"
import Head from 'next/head';
import Image from 'next/image';
import NavbarCopper from './navbar';
import Footer from './footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Golden Copper Company</title>
        <meta name="description" content="High-quality copper cables and wiring solutions from Golden Copper Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <NavbarCopper />

      <section className="flex flex-col md:flex-row min-h-screen">
        <div className="flex-1 flex flex-col justify-center items-start p-4 md:p-12 bg-gradient-to-r from-yellow-300 to-yellow-500">
          <h1 className="text-4xl font-bold text-gray-800">Golden Copper Company</h1>
          <p className="text-xl text-gray-700 mt-3">
            Leading the industry with high-quality copper cables and wiring solutions.
          </p>
          <button className="mt-5 bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="flex-1 flex justify-end items-center p-4">
          <Image
            src="/banner.png"
            alt="Copper Cables"
            width={600}
            height={500}
            objectFit="cover"
          />
        </div>
      </section>

      <section className="bg-white text-gray-800 py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <Image src="/about-image.jpg" alt="About Golden Copper Company" width={640} height={360} className="rounded-lg shadow-lg" />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-lg">
              At Golden Copper Company, we pride ourselves on delivering top-tier copper wiring solutions tailored to the evolving needs of our global clientele. Our commitment to sustainability and innovation ensures that we stay at the forefront of the industry. With over a decade of expertise, we specialize in manufacturing high-grade copper cables that meet the highest standards of quality and performance. Our state-of-the-art facilities employ cutting-edge technologies to ensure efficient production and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Partners</h2>
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
              <img src="/partner-3.png" alt="Partner 3" className="mx-auto shadow-lg rounded-lg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="hover:scale-105 transition-transform duration-300">
              <Image src="/gallery-1.jpg" alt="Gallery Image 1" width={300} height={200} layout="responsive" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-2 hover:scale-105 transition-transform duration-300">
              <Image src="/gallery-2.jpg" alt="Gallery Image 2" width={600} height={400} layout="responsive" className="rounded-lg shadow-lg" />
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <Image src="/gallery-3.jpg" alt="Gallery Image 3" width={300} height={200} layout="responsive" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
