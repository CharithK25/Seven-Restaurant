import React, { useRef } from "react";
import "./Privateevents.css";
import MOMO from "../asset/MOMO.jpg";
import Allmix from "../asset/Allmix.jpg";
import kebab from "../asset/kebab.jpg";
import BackgroundVideo from "../asset/privateevents.mp4";

// Define types for form inputs
interface EnquiryForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  date: string;
  timeOfBooking: string;
  numberOfGuests: number;
  typeOfEvent: string;
  additionalInfo: string;
}

const initialFormState: EnquiryForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  date: "",
  timeOfBooking: "",
  numberOfGuests: 0,
  typeOfEvent: "",
  additionalInfo: "",
};

const Privateevents: React.FC = () => {
  const [formState, setFormState] = React.useState<EnquiryForm>(initialFormState);
  const contentRef = useRef<HTMLDivElement>(null); // Reference to the section to scroll to

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Thank you for your inquiry! We'll get back to you shortly.");
  };

  const handleScrollDown = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const galleryImages = [
    { src: MOMO, alt: "VIP Area 1", caption: "VIP Area" },
    { src: Allmix, alt: "VIP Area 2", caption: "VIP Area" },
    { src: kebab, alt: "VIP Area 3", caption: "VIP Area" },
  ];

  return (
    <div className="private-hire-container">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Scroll Down Prompt */}
      <ScrollDownPrompt onClick={handleScrollDown} />

      {/* Content Below Video */}
      <div ref={contentRef} className="content-overlay">
        <HeaderSection />
        <section className="content-wrapper">
          <EnquiryForm formState={formState} handleChange={handleChange} handleSubmit={handleSubmit} />
          <ImageGallery images={galleryImages} />
        </section>
      </div>
    </div>
  );
};

const HeaderSection: React.FC = () => (
  <section className="header-section">
    <h1>Private Areas & Hire</h1>
    <p>
      Host your perfect event with us! Whether it’s an intimate dinner, a grand celebration, or a corporate party, we
      offer the ideal setting. Choose from private dining, lounges, or outdoor spaces to suit your occasion.
    </p>
    <p>
      For more details, email: <strong>info@thesevenharrow.com</strong> or fill out the inquiry form below, and we’ll be in touch!
    </p>
  </section>
);

interface EnquiryFormProps {
  formState: EnquiryForm;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ formState, handleChange, handleSubmit }) => (
  <section className="enquiry-form-section">
    <h2>Enquire</h2>
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" value={formState.firstName} onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" value={formState.lastName} onChange={handleChange} />
      <div className="form-row">
        <input type="email" name="email" placeholder="Email" value={formState.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" value={formState.phone} onChange={handleChange} />
      </div>
      <div className="form-row">
        <select name="position" value={formState.position} onChange={handleChange}>
          <option value="">Select Position</option>
          <option value="Mainbar">MainBar</option>
          <option value="SmallLounge">Small Lounge</option>
          <option value="Stables">Stables</option>
          <option value="Outdoor">Outdoor</option>
        </select>
        <input type="date" name="date" value={formState.date} onChange={handleChange} />
      </div>
      <input
        type="text"
        name="timeOfBooking"
        placeholder="Time of Booking"
        value={formState.timeOfBooking}
        onChange={handleChange}
      />
      <input
        type="number"
        name="numberOfGuests"
        placeholder="Number of Guests"
        value={formState.numberOfGuests}
        onChange={handleChange}
      />
      <input type="text" name="typeOfEvent" placeholder="Type of Event" value={formState.typeOfEvent} onChange={handleChange} />
      <textarea
        name="additionalInfo"
        placeholder="Tell us more about your event."
        value={formState.additionalInfo}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
);

interface ImageGalleryProps {
  images: { src: string; alt: string; caption: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => (
  <section className="image-gallery">
    {images.map((image, index) => (
      <div className="image-container" key={index}>
        <img src={image.src} alt={image.alt} />
        <div className="image-caption">{image.caption}</div>
      </div>
    ))}
  </section>
);

interface ScrollDownPromptProps {
  onClick: () => void;
}

const ScrollDownPrompt: React.FC<ScrollDownPromptProps> = ({ onClick }) => (
  <div className="scroll-down-prompt" onClick={onClick}>
    <span className="arrow">↓</span>
    <p>Scroll Down</p>
  </div>
);

export default Privateevents;