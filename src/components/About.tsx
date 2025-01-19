import React from "react";
import NightCourtyard from "../asset/Snow2.jpeg";
import Sunny from "../asset/Sunny.png";
import Alex from "../asset/Alex.jpeg"; // Import Alex's image
import Bartenders from "../asset/Bartenders.jpeg";
import "./About.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      {/* Left Image Section */}
      <div className="image-section">
        <img src={NightCourtyard} alt="Inside Diner" className="about-image" />
      </div>

      {/* Right Content Section */}
      <div className="content-section">
        <h1>ABOUT US</h1>
        <p>
          London's Homely, Assorted Bar & Restaurant: Built 400 years ago, The
          Seven Harrow was formally known as The Seven Balls. It has been, and
          will continue to be, an iconic landmark in Harrow's history. The
          building was first licensed in 1759 and has been serving as a social
          heart for the area ever since. The pub has now been transformed into
          a modern Indian restaurant, lounge, and cocktail bar. Join us for
          major sporting events, to celebrate a special occasion, or enjoy a
          cocktail in our lounge. “The Seven wonders of the world, to see, to
          hear, to touch, to taste, to laugh, and to love.”
        </p>
        <h2>Food - Cocktails - Beer Garden - Live Sports</h2>
        <p>
          <strong>Location:</strong> The Seven Harrow, 749 Kenton Ln, Harrow HA3 6AW
          <br />
          <strong>Hours:</strong> Restaurant & Bar Timings:
          <ul>
            <li>Sun - Thur: 12pm - 11:30pm</li>
            <li>Fri: 12pm - 12am</li>
            <li>Sat: 12pm - 12:30am</li>
            <li>(Kitchen Closed) Mon-Fri: 3pm - 6pm & Last food orders at 9:45pm</li>
          </ul>
        </p>

        {/* Hover Box for Sunny */}
        <p className="hover-wrapper">
          <strong className="name">Restaurateur:</strong>{" "}
          <span className="name">Sunny Sammi</span>
          <div className="hover-box">
            <h2>Sunny Sammi</h2>
            <img src={Sunny} alt="Sunny Sammi" className="hover-image" />
            <div className="hover-content">
              <p>
              Sunny Sammi is the visionary behind The Seven Harrow. Known for 
             his innovative approach to hospitality and an eye for detail, 
              Sunny has transformed this historic pub into a modern culinary destination, 
              bringing together tradition and innovation. With a deep passion for creating memorable experiences, 
              Sunny ensures that every guest feels welcomed and leaves with lasting impressions. His commitment to excellence 
              extends to curating a team of top talent, fostering a culture of warmth and professionalism. Under Sunny’s 
              leadership, The Seven Harrow has become a cornerstone of the community, celebrated for its impeccable service and vibrant atmosphere.
              </p>
            </div>
          </div>
        </p>

        {/* Hover Box for Alex */}
        <p className="hover-wrapper">
          <strong className="name">General Manager:</strong>{" "}
          <span className="name">Alex Pici</span>
          <div className="hover-box">
            <h2>Alex Pici</h2>
            <img src={Alex} alt="Alex Pici" className="hover-image" />
            <div className="hover-content">
              <p>
                Alex, the General Manager of The Seven Harrow, is the driving
                force behind its exceptional hospitality and seamless
                operations. With a knack for creating memorable guest
                experiences, Alex combines innovative management strategies with
                a personal touch, ensuring every visitor feels like family.
                Known for his meticulous attention to detail and passion for
                cultivating a welcoming atmosphere, Alex has transformed The
                Seven Harrow into a destination renowned for its impeccable
                service and warm community spirit.
              </p>
            </div>
          </div>
        </p>
        <p className="hover-wrapper">
          <strong className="name">Bartenders:</strong>{" "}
          <span className="name">Neville & Raya</span>
          <div className="hover-box">
            <h2>Neville & Raya</h2>
            <img src={Bartenders} alt="Neville & Raya" className="hover-image" />
            <div className="hover-content">
              <p>
              Neville and Raya, the talented bartenders at The Seven Harrow, bring
               a perfect mix of flair and expertise to every pour. Neville’s classic style 
               and deep knowledge of vintage cocktails beautifully complement Raya’s 
               creative flair for crafting innovative, Instagram-worthy drinks. Together, t
               hey ensure every guest’s experience is both personal and memorable, offering a warm 
               smile and impeccable attention to detail. Whether it’s a timeless martini or a bold new creation, Neville and Raya make every visit to the bar unforgettable.
              </p>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;