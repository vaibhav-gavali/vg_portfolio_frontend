import React from 'react';
import { NAV } from '../constants';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {[
        NAV.HOME,
        NAV.ABOUT,
        NAV.WORK,
        NAV.SKILLS,
        NAV.TESTIMONIALS,
        NAV.CONTACT,
      ].map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
