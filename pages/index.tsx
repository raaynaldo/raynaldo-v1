import clsx from 'clsx';
import Image from 'next/image';
import profilePic from '@/public/img/me.jpg';
import logoTransaparent from '@/public/img/logo-transparent.png';
import { FaDev, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { BsChevronDoubleDown, BsEye } from 'react-icons/bs';
import {
  SiTypescript,
  SiJavascript,
  SiServerless,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiAmazondynamodb,
  SiPostgresql,
} from 'react-icons/si';
import Accent from '@/components/Accent';

export default function Home() {
  return (
    <>
      <header className='sticky top-0 z-10 bg-white/50 backdrop-blur-md'>
        <nav className='flex justify-center layout'>
          <ul className='flex items-center justify-between w-3/4 h-20 sm:w-1/2'>
            <li className='hover-primary'>
              <a href='#about'>About</a>
            </li>
            <li className='hover-primary'>
              <a href='#home'>Experience</a>
            </li>
            <li className='hover-primary'>
              <a href='#blog'>Blog</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className='bg-white'>
        <section id='home'>
          <div className='flex flex-col items-center justify-center h-screen-minus-div min-h-max layout'>
            <Image src={logoTransaparent} alt='logo' className='w-6 sm:w-9' />
            <h2 className='mt-2 text-2xl sm:mt-3 sm:text-4xl 2xl:text-5xl'>
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
                <FaGithubSquare size={35} className='hover-primary' />
              </a>
              <a
                href='https://www.linkedin.com/in/teofilusraynaldo/'
                className='cursor-ne-resize'
                target='_blank'
              >
                <FaLinkedin size={35} className='hover-primary' />
              </a>
              <a
                href='https://dev.to/raaynaldo'
                className='cursor-ne-resize'
                target='_blank'
              >
                <FaDev size={35} className='hover-primary' />
              </a>
            </div>

            <a
              className='absolute text-4xl cursor-pointer text-primary bottom-10 animate-bounce'
              href='#about'
            >
              <BsChevronDoubleDown className='hover-primary' />
            </a>
          </div>
        </section>

        <section id='about'>
          <div className='flex flex-col pt-20 layout'>
            <h1 className='text-center md:text-left'>
              <span className='border-b-2 border-primary-500'>About Me</span>
            </h1>
            <div className='flex flex-col items-center gap-5 mt-5 md:items-start md:flex-row-reverse'>
              <div
                className={clsx('overflow-hidden rounded-md', 'w-1/2 md:w-3/4')}
              >
                <Image src={profilePic} alt='Picture of the author' />
              </div>
              <div className='flex flex-col gap-4 text-justify md:mt-0'>
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

                <h3>
                  <span className='border-b-2 border-primary-500'>
                    Tech Stack 🧑‍💻
                  </span>
                </h3>
                <div className='flex gap-4'>
                  <SiJavascript size={30} className='hover-primary' />
                  <SiTypescript size={30} className='hover-primary' />
                  <SiServerless size={30} className='hover-primary' />
                  <SiNodedotjs size={30} className='hover-primary' />
                  <SiReact size={30} className='hover-primary' />
                  <SiRedux size={30} className='hover-primary' />
                  <SiTailwindcss size={30} className='hover-primary' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='blog' className='pt-20'>
          <div className='flex flex-col h-screen layout'>
            <h1>
              <span className='border-b-2 border-primary-500'>
                Featured Posts
              </span>
            </h1>

            <ul className='grid grid-rows-2 gap-3 mt-9 sm:grid-cols-2 md:grid-cols-3'>
              <li className='p-3 border-2 border-black rounded-md'>
                <h4>📚 RTK Query Tutorial (CRUD)</h4>
                <p className='flex items-center gap-2 mt-1'>
                  <span className='flex items-center gap-1'>
                    <BiTimeFive />
                    <Accent>9 min read</Accent>
                  </span>

                  <span className='flex items-center gap-1'>
                    <BsEye />
                    <Accent>1,000 views</Accent>
                  </span>
                </p>
                <p className='mt-2 font-semibold'>May 3, 2023</p>
                <p className='italic'>#react #redux #javascript #tutorial</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
