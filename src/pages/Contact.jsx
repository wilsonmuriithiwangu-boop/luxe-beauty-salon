import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

const phoneNumber = "+254 789 726 060";
const whatsappNumber = "254789726060";
const email = "hello@luxebeautysalon.com";

function Contact() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="page-hero contact-hero">

        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">

          <div className="section-label">
            WE'D LOVE TO HEAR FROM YOU
          </div>

          <h1>
            Get in <em>Touch</em>
          </h1>

          <p>
            Have a question, want to book or simply want
            to know more? We're here for you.
          </p>

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact-section section-padding">

        <div className="contact-intro">

          <div>
            <div className="section-label">
              CONTACT LUXE
            </div>

            <h2>
              Let's talk
              <br />
              <em>beauty.</em>
            </h2>
          </div>

          <p>
            Whether you're ready for your next look or
            simply have a question, feel free to reach out.
            Our team will be happy to help.
          </p>

        </div>


        <div className="contact-grid">

          {/* LOCATION */}
          <div className="contact-card">

            <div className="contact-icon">
              <MapPin size={24} />
            </div>

            <span>VISIT US</span>

            <h3>Our Location</h3>

            <p>
              Meru, Kenya
            </p>

            <a href="#location">
              Get Directions
              <ArrowRight size={16} />
            </a>

          </div>


          {/* PHONE */}
          <div className="contact-card">

            <div className="contact-icon">
              <Phone size={24} />
            </div>

            <span>CALL US</span>

            <h3>Phone</h3>

            <p>
              {phoneNumber}
            </p>

            <a href={`tel:${whatsappNumber}`}>
              Call Now
              <ArrowRight size={16} />
            </a>

          </div>


          {/* WHATSAPP */}
          <div className="contact-card">

            <div className="contact-icon">
              <MessageCircle size={24} />
            </div>

            <span>MESSAGE US</span>

            <h3>WhatsApp</h3>

            <p>
              Available for appointments
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
              <ArrowRight size={16} />
            </a>

          </div>


          {/* EMAIL */}
          <div className="contact-card">

            <div className="contact-icon">
              <Mail size={24} />
            </div>

            <span>EMAIL US</span>

            <h3>Email</h3>

            <p>
              {email}
            </p>

            <a href={`mailto:${email}`}>
              Send Email
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>


      {/* OPENING HOURS */}
      <section className="hours-section">

        <div className="hours-content">

          <div className="hours-icon">
            <Clock size={28} />
          </div>

          <div>

            <div className="section-label">
              WHEN TO FIND US
            </div>

            <h2>
              Opening <em>Hours</em>
            </h2>

          </div>

        </div>


        <div className="hours-list">

          <div>
            <span>Monday - Friday</span>
            <strong>8:00 AM — 7:00 PM</strong>
          </div>

          <div>
            <span>Saturday</span>
            <strong>8:00 AM — 6:00 PM</strong>
          </div>

          <div>
            <span>Sunday</span>
            <strong>Closed</strong>
          </div>

        </div>

      </section>


      {/* LOCATION */}
      <section
        className="location-section"
        id="location"
      >

        <div className="location-box">

          <div className="location-content">

            <div className="section-label">
              FIND US
            </div>

            <h2>
              Come visit
              <br />
              <em>Luxe.</em>
            </h2>

            <p>
              We're located in Meru, Kenya.
              Contact us before visiting so we can
              guide you to the salon.
            </p>

            <div className="location-actions">

              <Link
                to="/booking"
                className="btn-primary"
              >
                <CalendarDays size={18} />
                Book Appointment
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="location-whatsapp"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

            </div>

          </div>


          {/* LOCATION VISUAL */}
          <div className="location-placeholder">

            <MapPin size={55} />

            <span>
              LUXE BEAUTY SALON
            </span>

            <small>
              MERU, KENYA
            </small>

            <a href="#location">
              View Location
              <ArrowRight size={15} />
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;