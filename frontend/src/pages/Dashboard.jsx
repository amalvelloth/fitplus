import React, { useEffect, useState } from 'react';
import DesktopMenu from '../components/DesktopMenu';

function Dashboard() {
  
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good morning';
    if (hours < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const greeting = getGreeting();


  return (
    <>
      <section className="flex">
        <DesktopMenu />
        <div className="h-screen w-full relative flex  bg-neutral-900">
          <div className="flex items-start pt-24 justify-start px-8 max-sm:px-4">
            <div className="greetings">
              <h1 className="text-white text-2xl max-sm:text-lg">
                {greeting}{''} <span className="font-extrabold text-4xl max-sm:text-2xl">AMAL V</span>
              </h1>
              <h2 className="text-white text-4xl max-sm:text-3xl font-semibold mt-2">Welcome back! 🎉</h2>
            </div>
            <div className="avatar bg-white w-24 h-24 rounded-full border-none overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://i.pinimg.com/736x/56/28/a6/5628a66967df6318515fcbe7e912e274--cr-ronaldo-cristiano-ronaldo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
