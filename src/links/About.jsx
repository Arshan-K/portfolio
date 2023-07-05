import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p>
        I am a passionate web developer with a strong focus on front-end development. I have experience in creating
        modern, responsive websites using technologies like HTML, CSS, and JavaScript. I enjoy turning ideas into
        beautiful and functional websites that provide a great user experience.
        <ol>
          <li>HTML5</li>
          <li>CSS3</li>
          <li class="highlighted-skills">JavaScript</li>
          <li class="highlighted-skills">React.js</li>
          <li>Responsive Web Design</li>
          <li>UI/UX Design</li>
          <li>Testing and Debugging</li>
        </ol>
      </p>
      <p className='para'>
      I am constantly learning and exploring new technologies to stay up-to-date with the latest industry trends. 
  I am a motivated individual who enjoys working in a collaborative team environment and always strives for 
  excellence in my work. I believe in the power of continuous learning and professional development. 
  I actively participate in web development communities, attend conferences, and read tech blogs to expand 
  my knowledge and stay ahead in this fast-paced industry.
  
  With a keen eye for detail and a passion for creating visually appealing websites, I specialize in crafting 
  user-centric designs that enhance the overall user experience. I have a deep understanding of the principles 
  of design and usability, which allows me to create intuitive and functional interfaces.
  
  In addition to my technical skills, I also possess strong communication and collaboration abilities. I believe 
  that effective communication is crucial for successful project outcomes. I enjoy collaborating with clients and 
  fellow developers to understand their vision and translate it into a tangible product. I take pride in my ability 
  to listen actively, ask the right questions, and provide valuable insights to deliver solutions that align with 
  the clients' goals and requirements.
  
  Outside of work, I am an avid learner and enjoy exploring other creative outlets. I love experimenting with new 
  technologies and frameworks, taking on personal projects to further hone my skills. When I'm not coding, you can 
  find me indulging in my other hobbies, such as photography, playing musical instruments, and discovering new 
  cuisines.
      </p>
      <p class="good-text">As a professional, I am dedicated to delivering high-quality solutions that meet client requirements and exceed expectations.</p>
    </div>
  );
}

export default About;
