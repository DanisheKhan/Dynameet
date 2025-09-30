import React from 'react';
import { Link } from 'react-router-dom';
import { eventImages } from '../../data/content';

const SimpleEvents = () => {
  return (
    <section className="w-full bg-[#0c0c0c] py-16">
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 className="font-lalezar text-[60px] text-white mb-12">Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-[450px] rounded-md overflow-hidden">
            <img
              src="/images/events-1.jpg"
              alt="DJ Performance"
              className="w-full h-full object-cover object-[50%_30%] hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-[450px] rounded-md overflow-hidden">
            <img
              src="/images/events-3.jpg"
              alt="DJ Performance"
              className="w-full h-full object-cover object-[50%_30%] hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-[450px] rounded-md overflow-hidden">
            <img
              src="/images/events-2.jpg"
              alt="DJ Performance"
              className="w-full h-full object-cover object-[50%_30%] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/events"
            className="bg-[#FF6FCF] hover:bg-[#E91E63] text-white py-3 px-8 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
          >
            See More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SimpleEvents;