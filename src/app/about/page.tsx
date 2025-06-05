import React from 'react'
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold text-center mb-8'>About me</h1>
      <section className='mb-16'>
        <p className='text-lg text-secondary max-w-3xl text-center mx-auto'>I'm a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences and robust server-side solutions.</p>
      </section>
      <section className='mb-16'>
        <h2 className='section-title'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaCode className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
            <ul className='text-secondary space-y-2'>
              <li>React / Next.js</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaLaptopCode className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Backend</h3>
            <ul className='text-secondary space-y-2'>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaGraduationCap className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='text-secondary space-y-2'>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='mb-16'>
        <h2 className='section-title'>Experience</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 shadow-md rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-2'>Senior Full Stack Developer</h3>
          <p className='text-primary mb-2'> Comapany Name - 2020 - Present</p>
          <ul className='text-secondary space-y-2 list-disc list-inside'>
            <li>Led development of multiple web applications using React and Node.js</li>
            <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
          </div>
          <div className='bg-white dark:bg-dark/50 shadow-md rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-2'>Full Stack Developer</h3>
          <p className='text-primary mb-2'> Previous Company • 2018 - 2020</p>
          <ul className='text-secondary space-y-2 list-disc list-inside'>
            <li>Developed and maintained RESTful APIs</li>
            <li>Built responsive user interfaces with modern JavaScript frameworks</li>
            <li>Optimized database queries improving performance by 40%</li>
          </ul>
          </div>
        </div>
      </section>
      <section className='mb-16'>
        <h2 className='section-title'>Education</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 shadow-md rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-2'>Bachelor of Science in Computer Science</h3>
          <p className='text-primary mb-2'>University Name • 2014 - 2018</p>
          <p className='text-secondary'>Graduated with honors. Focused on software engineering and web development.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About