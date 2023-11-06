import React from 'react';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 bg-white/50 backdrop-blur-md'>
      <nav className='flex justify-center layout'>
        <ul className='flex items-center justify-between w-3/4 h-20 sm:w-1/2'>
          <li className='hover-primary'>
            <a href='#about'>About</a>
          </li>
          <li className='hover-primary'>
            <a href='#experience'>Experience</a>
          </li>
          <li className='hover-primary'>
            <a href='#blog'>Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
