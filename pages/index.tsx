export default function Home() {
  return (
    <>
      <header className='sticky top-0 bg-white/20 backdrop-blur-md'>
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
        <section id='home' className='bg-red-300 '>
          <div className='flex flex-col items-center justify-center h-screen-minus-div layout'>
            <h3>Hello there 👋! My name is</h3>
            <h1>Raynaldo Sutisna</h1>
            <p className='text-center md:w-1/2'>
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
