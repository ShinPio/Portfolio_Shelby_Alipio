import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className=' bg-emerald-100 py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-gray-700 leading-7'>
        Hi there! I'm Shelby Alipio a passionate front-end developer with a love for crafting
        engaging and user-friendly digital experiences. My journey in web
        development began with a curiosity for turning ideas into interactive
        solutions.
      </p>
      <p className='text-gray-700 leading-7 mt-4'>
        I specialize in creating responsive and visually appealing websites
        using cutting-edge technologies. From translating design concepts into
        code to optimizing performance, I thrive on bringing creativity to life
        in the digital realm.
      </p>
      <p className='text-gray-700 leading-7 mt-4'>
        My skills include proficiency in HTML, CSS, and JavaScript, along with
        experience in popular front-end frameworks like React. I'm always eager
        to stay updated on the latest industry trends and explore new
        possibilities in the ever-evolving world of web development.
      </p>
        </article>
      </div>
    </section>
  );
};
export default About;