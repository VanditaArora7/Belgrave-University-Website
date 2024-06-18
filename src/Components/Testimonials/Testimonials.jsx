import './Testimonials.css'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import { useRef } from 'react'
const Testimonials = () => {
    const slider=useRef();
    let tx=0;

    const slideForward=()=>{
        if(tx >-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward = () => {
          if (tx < 0) {
            tx += 25
          }
          slider.current.style.transform = `translateX(${tx}%)`
    }




  return (
    <div className="testimonials">
      <img src={nexticon} alt="" className="next-btn" onClick={slideForward} />
      <img src={backicon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Sandra Soles</h3>
                  <span>Belgrave,USA</span>
                </div>
              </div>
              <p>
                My experience at Belgrave University has been nothing short of
                amazing. The dedicated mentors and faculty have helped me
                greatly enhance both my academic and interpersonal skills. The
                supportive learning environment and numerous opportunities for
                personal growth have truly prepared me for a successful career.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>William Jones</h3>
                  <span>Belgrave,USA</span>
                </div>
              </div>
              <p>
                Belgrave University has been instrumental in building my career.
                The diverse curriculum and practical learning experiences have
                equipped me with the necessary skills to face professional
                challenges confidently. The university's focus on holistic
                development has made my journey both enriching and rewarding.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Alyssa Drake</h3>
                  <span>Belgrave,USA</span>
                </div>
              </div>
              <p>
                Attending Belgrave University was a transformative experience.
                The institution's emphasis on academic excellence, combined with
                a vibrant community and extracurricular activities, provided a
                perfect balance for my personal and professional growth. I am
                grateful for the mentorship and support I received throughout my
                studies.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Jack Morton</h3>
                  <span>Belgrave,USA</span>
                </div>
              </div>
              <p>
                Belgrave University offers an exceptional learning environment.
                The faculty's expertise and dedication to student success, along
                with the university's state-of-the-art facilities and resources,
                have greatly contributed to my academic achievements. The
                university's commitment to nurturing well-rounded individuals
                has prepared me well for the future.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Testimonials