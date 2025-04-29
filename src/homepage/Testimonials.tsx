'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';

const testimonials = [
  {
    company: 'REDTIC',
    type: 'Company',
    rating: 5,
    text: 'Working with Tomas Rios has been an invaluable experience. His focus on quality and quick solutions are unmatched.',
    logo: '/empresa1.png',
  },
  {
    company: 'Seisk',
    type: 'Advertising Agency',
    rating: 5,
    text: 'At Seisk, his management of databases and processes was key to our success. Highly recommend him.',
    logo: '/empresa2.png',
  },
  {
    company: 'Backendito Corp.',
    type: 'Corporation of Development',
    rating: 5,
    text: 'Excellent attitude, clear communication, and top-quality work. Tomas consistently delivers outstanding results.',
    logo: '/empresa3.png',
  },
  {
    company: 'Otro Cliente',
    type: 'Tech Partner',
    rating: 5,
    text: 'Tomas is an exceptional professional, dedicated and innovative in every project we worked together.',
    logo: '/empresa4.png',
  },
];

function Testimonials() {
  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Fondo de imagen */}
      <Image
        src="/426a333e-d353-4cab-aee7-e828ef5fd05b.png"
        alt="Background Testimonials"
        fill
        className="object-cover z-0"
      />

      {/* Overlay oscuro suave */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Fades laterales */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black z-20 pointer-events-none" />

      {/* Contenido */}
      <div className="z-30 flex flex-col items-center px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Testimonials About <span className="text-blue-500">My Results</span>
        </h2>
        <p className="max-w-3xl mb-12 text-lg text-gray-300">
          Real experiences shared by my clients that reflect my commitment and
          results.
        </p>

        {/* Carrusel Infinito */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={2.5}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={6000}
          loop={true}
          className="w-screen px-32"
        >
          {testimonials.concat(testimonials).map(
            (
              testimonial,
              index, // duplico para que sea eterno
            ) => (
              <SwiperSlide key={index}>
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg text-left min-h-[220px] flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        fill
                        className="object-contain rounded-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold">
                        {testimonial.company}
                      </h3>
                      <p className="text-gray-300">{testimonial.type}</p>
                    </div>
                    <div className="flex items-center ml-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-orange-400 text-2xl" />
                      ))}
                      <span className="text-white font-semibold ml-2">
                        {testimonial.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-200">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
