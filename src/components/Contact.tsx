import React from "react";
import "./Contact.css";

// Importing icons
import InstagramIcon from "../asset/Instagram-icon.png";
import FacebookIcon from "../asset/Facebook-icon.png";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Google Map Section */}
      <div className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.2253543585983!2d-0.316575584067495!3d51.60146611025515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876123a2a7eaba7%3A0x3c01bf49c92f4c89!2sThe%20Seven%20Harrow!5e0!3m2!1sen!2suk!4v1695498765432!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <div className="info-section">
        <h2>LOCATION & HOURS</h2>
        <p>
          <strong>The Seven Harrow</strong>
          <br />
          749 Kenton Ln, Harrow HA3 6AW
        </p>
        <p>
          <strong>Restaurant & Bar Open:</strong>
          <br />
          <span>Sun - Thur: 12pm - 11:30pm</span>
          <br />
          <span>Fri: 12pm - 12am</span>
          <br />
          <span>Sat: 12pm - 12:30am</span>
        </p>
        <p>
          <strong>Bookings:</strong> 020 8537 0705
        </p>

        <h2>JOBS</h2>
        <p>
          Should you wish to join our team, contact us at{" "}
          <a href="mailto:info@thesevenharrow.com">info@thesevenharrow.com</a>
        </p>

        {/* Social Media Icons */}
        <div className="social-media-container">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={FacebookIcon} alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;