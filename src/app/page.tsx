import React from 'react';
import Header from '@/homepage/Header';
import AboutMe from '@/homepage/AboutMe';
import ProjectsSlider from '@/homepage/ProjectsSlider';
import Technologies from '@/homepage/Technologies';
import Testimonials from '@/homepage/Testimonials';
import CalendarBooking from '@/homepage/CalendarBooking';

function page() {
  return (
    <div>
      <Header />
      <AboutMe />
      <ProjectsSlider />
      <Technologies />
      <Testimonials />
      <CalendarBooking />
    </div>
  );
}

export default page;
