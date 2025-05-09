'use client';

function CalendarBooking() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold mb-8 text-black text-center dark:text-white">
        Book a Meeting with Me
      </h2>
      <div className="w-full max-w-5xl h-[600px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://cal.com/tomasrios"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="camera; microphone; fullscreen; speaker; display-capture"
          className="rounded-xl"
        ></iframe>
      </div>
    </section>
  );
}

export default CalendarBooking;
