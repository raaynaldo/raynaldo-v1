import React from 'react';
import { FaLinkedin, FaRegEnvelope, FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-white/50'>
      <main className='flex flex-col items-center pt-4 pb-2 layout'>
        <p>Contact me</p>
        <div className='flex gap-2 mt-1 mb-3'>
          <a
            href='mailto:me@raynaldosutisna.com'
            className='cursor-ne-resize'
            target='_blank'
          >
            <FaRegEnvelope size={27} className='hover-primary' />
          </a>
          <a
            href='https://www.linkedin.com/in/teofilusraynaldo/'
            className='cursor-ne-resize'
            target='_blank'
          >
            <FaLinkedin size={27} className='hover-primary' />
          </a>
          <a
            href='https://twitter.com/raaynaldo'
            className='cursor-ne-resize'
            target='_blank'
          >
            <FaTwitterSquare size={27} className='hover-primary' />
          </a>
        </div>

        <p>© 2023 | Made with ❤️ by Raynaldo Sutisna</p>
      </main>
    </footer>
  );
}
