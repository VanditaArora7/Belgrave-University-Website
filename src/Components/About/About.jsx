import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setplayState }) => {

  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setplayState(true)
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Belgrave University is renowned for its commitment to academic
          excellence and student growth. Offering a diverse and comprehensive
          curriculum, the university provides students with a robust foundation
          in both theoretical knowledge and practical skills.
        </p>
        <p>
          Belgrave places a strong emphasis on fostering a nurturing and
          intellectually stimulating environment where students are encouraged
          to pursue their passions and achieve their full potential. The
          faculty, comprised of distinguished scholars and industry experts, is
          dedicated to mentoring students and providing personalized guidance.
        </p>
        <p>
          Additionally, the university supports holistic development through a
          variety of extracurricular activities, leadership programs, and
          community engagement opportunities. This well-rounded approach ensures
          that graduates are not only well-prepared for their professional
          careers but also equipped to make meaningful contributions to society.
        </p>
      </div>
    </div>
  )
}
export default About