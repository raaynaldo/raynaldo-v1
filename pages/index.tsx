import clsx from 'clsx';
import { FaDev, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <header className='sticky top-0 z-10 bg-white/50 backdrop-blur-md'>
        <nav className='flex justify-center layout'>
          <ul className='flex items-center justify-between w-3/4 h-20 sm:w-1/2'>
            <li>Home</li>
            <li>Experience</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </nav>
      </header>

      <main>
        <section id='home' className='bg-white'>
          <div className='flex flex-col items-center justify-center h-screen-minus-div layout'>
            <h2 className='text-2xl sm:text-4xl 2xl:text-5xl'>
              <div className='inline-block animate-wiggle'>👋</div> Hello! My
              name is
            </h2>
            <h1
              className={clsx(
                'mt-2 mb-3 sm:mt-4 sm:mb-5',
                'text-3xl sm:text-5xl 2xl:text-6xl'
              )}
            >
              <span className='transition-colors bg-primary-300'>
                Raynaldo Sutisna
              </span>
            </h1>
            <p
              className={clsx('text-center sm:w-3/5', 'sm:text-lg 2xl:text-xl')}
            >
              A passionate about building beautiful websites with love, I am a
              skilled full-stack web developer dedicated to crafting clean and
              efficient code.
            </p>
            <div className='flex gap-2 mt-2'>
              <a
                href='https://github.com/raaynaldo'
                className='cursor-ne-resize'
                target='_blank'
              >
                <FaGithubSquare
                  size={35}
                  className='transition duration-150 ease-linear hover:text-primary-500'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/teofilusraynaldo/'
                className='cursor-ne-resize'
                target='_blank'
              >
                <FaLinkedin
                  size={35}
                  className='transition duration-150 ease-linear hover:text-primary-500'
                />
              </a>
              <a
                href='https://dev.to/raaynaldo'
                className='cursor-ne-resize'
                target='_blank'
              >
                <FaDev
                  size={35}
                  className='transition duration-150 ease-linear hover:text-primary-500'
                />
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className='h-96'>Tech Stacks</div>
        </section>

        <section>
          <div className='h-96'>Blog</div>
        </section>
      </main>
    </>
  );
}
