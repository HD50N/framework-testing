import React from 'react';
import Navigation from '../components/Navigation';

const About: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn more about our team and mission to build amazing web experiences.
            </p>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are passionate about creating beautiful, performant web applications using modern technologies like Gatsby, TypeScript, and Tailwind CSS.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team believes in the power of static site generation and the developer experience that Gatsby provides. We love building fast, accessible, and maintainable websites.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're building a personal blog, a business website, or a complex web application, we're here to help you succeed with the best tools and practices.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower developers to build amazing web experiences with modern, accessible, and performant technologies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Quality, performance, accessibility, and developer experience are at the core of everything we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
