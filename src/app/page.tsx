import React from 'react';
import Header from '@/homepage/Header';
import AboutMe from '@/homepage/AboutMe';
import ProjectsSlider from '@/homepage/ProjectsSlider';
import Technologies from '@/homepage/Technologies';
import Testimonials from '@/homepage/Testimonials';
import CalendarBooking from '@/homepage/CalendarBooking';
import { Separator } from '@/components/ui/separator';

function page() {
  return (
    <div>
      <Header />
      <Separator className="my-10 dark:bg-gray-600" />
      <AboutMe />
      <Separator className="my-10 dark:bg-gray-600" />
      <ProjectsSlider />
      <Separator className="my-10 dark:bg-gray-600" />
      <Technologies />
      <Testimonials />
      <CalendarBooking />
    </div>
  );
}

export default page;
