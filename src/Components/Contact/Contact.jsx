import './Contact.css'
import msgicon from '../../assets/msg-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phoneicon from '../../assets/phone-icon.png'
import locicon from '../../assets/location-icon.png'
import whitearrow from '../../assets/white-arrow.png'
import { useState } from 'react'
const Contact = () => {

     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append('access_key', '86c8fb5a-e83b-4662-8946-aa29250a790e')

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msgicon} alt="" />
        </h3>
        <p>
          If you have any concerns or need assistance, please reach out to us.
          Our team is here to help and address any questions you may have. We
          look forward to hearing from you!
        </p>
        <ul>
          <li>
            {' '}
            <img src={mailicon} alt="" />
            Belgrave@gmail.com
          </li>
          <li>
            {' '}
            <img src={phoneicon} alt="" />
            +1 123-XXXXXXXXX
          </li>
          <li>
            {' '}
            <img src={locicon} alt="" />
            77 XYZ Maxton Hall,BMW <br /> 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
          ></textarea>
          <button className="btn dark-btn">
            Submit now <img src={whitearrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}
export default Contact