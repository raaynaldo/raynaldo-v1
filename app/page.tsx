'use client';
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
  SiLeetcode,
} from 'react-icons/si';
import Accent from '@/components/Accent';
import { format } from 'date-fns';
import Header from '@/components/layout/Header';
import { Experience, experiences } from '@/data/experience';
import Footer from '@/components/layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '@/network/lib/blog';

export default function Page() {
  const { data } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => getBlogs().then((res) => res.data),
  });

  const blogs = data?.data || [];

  const featuredPosts = blogs
    .sort((a: any, b: any) => b.page_views_count - a.page_views_count)
    .slice(0, 6);

  return (
    <>
      <Header />

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
              <a
                href='https://leetcode.com/raaynaldo/'
                className='cursor-ne-resize'
                target='_blank'
              >
                <SiLeetcode size={35} className='hover-primary' />
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
          <div className='flex flex-col pt-20 mb-20 layout'>
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
                <div className='flex flex-wrap gap-4'>
                  <SiJavascript size={30} className='hover-primary' />
                  <SiTypescript size={30} className='hover-primary' />
                  <SiServerless size={30} className='hover-primary' />
                  <SiNodedotjs size={30} className='hover-primary' />
                  <SiReact size={30} className='hover-primary' />
                  <SiRedux size={30} className='hover-primary' />
                  <SiTailwindcss size={30} className='hover-primary' />
                  <SiAmazondynamodb size={30} className='hover-primary' />
                  <SiPostgresql size={30} className='hover-primary' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='experience'>
          <div className='pt-20 mb-20 layout'>
            <h1 className='text-center md:text-left'>
              <span className='border-b-2 border-primary-500'>Experience</span>
            </h1>

            <ul className='mt-10'>
              {experiences.map((experience: Experience) => (
                <li
                  key={experience.id}
                  className='relative px-5 py-3.5 border-l-2 border-primary-300'
                >
                  <span className='absolute w-2.5 h-2.5 rounded-full -left-1.5 bg-primary-300 top-5'>
                    &nbsp;
                  </span>
                  <div>{experience.date}</div>
                  <h4>{experience.companyName}</h4>
                  {experience.details && (
                    <ul className='mt-2 ml-4 list-disc'>
                      {experience.details.map((detail: string) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id='blog' className='pt-20 pb-20'>
          <div className='flex flex-col justify-center h-full layout'>
            <h1 className='text-center md:text-left'>
              <span className='border-b-2 border-primary-500'>
                Featured Posts
              </span>
            </h1>

            <div className='grid grid-rows-2 gap-3 mt-9 sm:grid-cols-2 md:grid-cols-3'>
              {featuredPosts.map((post: any) => (
                <a
                  href={post.url}
                  target='blank'
                  className='block p-2 border-2 border-black rounded-md cursor-ne-resize'
                  key={post.id}
                >
                  <h4>{post.title}</h4>
                  <p className='flex items-center gap-2 mt-1'>
                    <span className='flex items-center gap-1'>
                      <BiTimeFive />
                      {post.reading_time_minutes} min read
                    </span>

                    <span className='flex items-center gap-1'>
                      <BsEye />
                      <Accent>
                        {post.page_views_count.toLocaleString('en-US')} views
                      </Accent>
                    </span>
                  </p>
                  <p className='mt-4 font-bold'>
                    {format(new Date(post.published_at), 'MMM dd, yyyy')}
                  </p>
                  <p className='italic'>
                    {post.tag_list.map((tag: string) => `#${tag} `)}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
