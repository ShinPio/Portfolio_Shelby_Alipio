import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='bg-emerald-100'>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h1 className='text-3xl font-bold '>
         <span className=' font-siz text-emerald-900'> S</span><span className='text-emerald-600'>.A</span>
        </h1>
        <div className='flex flex-row  gap-6 justify-between items-center'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-emerald-700 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
      
    </nav>
  );
};
export default Navbar;