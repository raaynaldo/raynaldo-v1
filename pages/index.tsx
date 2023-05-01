import clsx from 'clsx';
import Image from 'next/image';
import profilePic from '@/public/img/me.jpg';
import { FaDev, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Accent from '@/components/Accent';

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
          <div className='flex flex-col items-center justify-center h-screen-minus-div min-h-max layout'>
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
              <Accent>Raynaldo Sutisna</Accent>
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

            <a
              className='absolute text-4xl cursor-pointer text-primary bottom-10 animate-bounce'
              href='#about'
            >
              <BsChevronDoubleDown className=' hover:text-primary-500' />
            </a>
          </div>
        </section>

        <section id='about' className='bg-white'>
          <div className='flex flex-col justify-center h-screen layout'>
            <h1 className='text-center sm:text-left'>About Me</h1>
            <div className='flex flex-col items-center gap-5 mt-5 sm:items-start sm:flex-row-reverse'>
              <Image
                src={profilePic}
                alt='Picture of the author'
                className='w-72 sm:w-80 sm:pl-5'
              />
              <div className='flex flex-col gap-4 text-justify sm:mt-0'>
                <p>
                  My name is <Accent>Ray</Accent>, and I work as a software
                  engineer with five years of experience. I started my career
                  developing .NET projects with C# and switched to working with
                  a full JS stack when I moved to the US in 2019.
                </p>
                <p>
                  In my most recent position, I developed veterinarian
                  applications using Node.js and the Serverless Framework for
                  the backend, React for the frontend, and AWS cloud services to
                  build scalable applications.
                </p>
                <p>
                  Currently, I am seeking a full stack developer position that
                  uses JavaScript or TypeScript as the primary stack, but I am
                  also open to learning new languages. I am confident that I can
                  adapt quickly and continue to build efficient and
                  user-friendly applications.
                </p>

                <h3 className='border-b-2 border-primary-500'>Tech Stacks</h3>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='h-96'>Blog</div>
        </section>
      </main>
    </>
  );
}
