export default function Home() {
  return (
    <>
      <header className='sticky top-0 bg-white/20 backdrop-blur-md'>
        <nav className='flex justify-center layout'>
          <ul className='flex items-center justify-between w-3/4 h-20 lg:w-1/2'>
            <li>Home</li>
            <li>Experience</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </nav>
      </header>

      <section>
        <div className='h-96'>Home</div>
      </section>

      <section>
        <div className='h-96'>Experience</div>
      </section>

      <section>
        <div className='h-96'>Blog</div>
      </section>

      <section>
        <div className='h-96'>About</div>
      </section>

      <section>
        <div className='h-96'>Contact</div>
      </section>
    </>
  );
}
