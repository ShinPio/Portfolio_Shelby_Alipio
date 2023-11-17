import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h2 className='text-6xl font-bold tracking-wider'>I'm Shelby Alipio</h2>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Front-End Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            Where Pixels Meet Purpose: Building Interactive Solutions.
          </p>
          <div className='flex gap-x-4 mt-4 '>
            <a href='#'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#'>
              <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
          <div className='flex flex-row items-center gap-4'> 
        <button className='px-4 py-1 border-2 border-emerald-950 rounded-full'> Download CV </button>
        <button className='px-4 py-1 border-2 border-emerald-950 rounded-full'> Hire Me </button>
        
        </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
        
      </div>
      
    </div>
  );
};
export default Hero;