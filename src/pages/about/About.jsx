import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, veritatis ea vel error earum molestiae hic maiores,
       dolorem corporis consectetur nam perferendis architecto, fugit officiis obcaecati alias voluptatem voluptate dolor.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex debitis eum nisi! At, soluta cupiditate, dolorem tenetur labore recusandae,
            fugiat facilis aliquam quod laudantium perferendis quas deleniti expedita quia nisi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error cumque neque ab autem quisquam corporis illo magnam nisi maiores dignissimos! Quidem,
            repellat quibusdam! Nisi at modi veritatis neque eos voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Amet eveniet nostrum obcaecati ex facilis molestiae incidunt architecto.
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex debitis eum nisi! At, soluta cupiditate, dolorem tenetur labore recusandae,
            fugiat facilis aliquam quod laudantium perferendis quas deleniti expedita quia nisi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error cumque neque ab autem quisquam corporis illo magnam nisi maiores dignissimos! Quidem,
            repellat quibusdam! Nisi at modi veritatis neque eos voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Amet eveniet nostrum obcaecati ex facilis molestiae incidunt architecto.
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex debitis eum nisi! At, soluta cupiditate, dolorem tenetur labore recusandae,
            fugiat facilis aliquam quod laudantium perferendis quas deleniti expedita quia nisi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error cumque neque ab autem quisquam corporis illo magnam nisi maiores dignissimos! Quidem,
            repellat quibusdam! Nisi at modi veritatis neque eos voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Amet eveniet nostrum obcaecati ex facilis molestiae incidunt architecto.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About