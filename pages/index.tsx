export default function Home() {
  return (
    <>
      <header className='sticky top-0 bg-white/50 backdrop-blur-md'>
        <nav className='flex justify-center layout'>
          <ul className='flex items-center justify-between w-3/4 h-20 md:w-1/2'>
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
            <h3>👋 Hello! My name is</h3>
            <h1 className='text-primary-500'>Raynaldo Sutisna</h1>
            <p className='mt-4 text-center md:w-1/2'>
              A passionate and skilled full-stack web developer building
              beautiful websites with love and a commitment to clean code.
            </p>
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
