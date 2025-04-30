'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';

const testimonials = [
  {
    company: 'Minecomunidad',
    rating: 5,
    text: '"Perfecto, me alegra mucho tu compromiso, espero tu proyecto crezca, es por eso también que quiero hacer esta otra comisión contigo."',
    logo: '/minecraftlogo.webp',
  },
  {
    company: 'Emerson Vigoreux',
    rating: 5,
    text: '"Encantado de trabajar con vosotros porque al final me vale la pena tener expertos acompañándome, porque ahorro tiempo y al mismo tiempo aprendo."',
    logo: '/emanuel.webp',
  },
  {
    company: 'Radio Ibiza',
    rating: 5,
    text: 'Todavía trabajo parcialmente en este proyecto, es una gran experiencia! - Tomas Rios',
    logo: '/radioibiza.webp',
  },
  {
    company: 'Bloxyfruits',
    rating: 5,
    text: '"Todo perfecto."',
    logo: '/bloxyfruits.webp',
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
      <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10" />

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
                  <div className="flex items-center gap-4 mb-6 text-gray-600">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        fill
                        className="object-contain rounded-full"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <h3 className="text-xl font-bold ">
                        {testimonial.company}
                      </h3>
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
                  <p className="text-gray-700">{testimonial.text}</p>
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
