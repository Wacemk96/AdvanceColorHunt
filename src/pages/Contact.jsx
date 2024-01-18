import React from 'react';
import HeroSection from '../components/HeroSection';
const Contact = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen dark:bg-gray-900">
        <HeroSection
          title={'Contact us'}
          description={'If you have any question please contact us'}
        />
      </div>
    </React.Fragment>
  );
};

export default Contact;
