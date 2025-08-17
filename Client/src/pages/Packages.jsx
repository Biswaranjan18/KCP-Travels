import React from 'react';
import PackagesPage from '../components/Packages'

const Packages = () => {
  return (
    <div className="pt-20"> {/* 👈 adds space below fixed navbar */}
      <PackagesPage/>
    </div>
  );
};

export default Packages;
