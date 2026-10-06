import { Link } from "react-router-dom";
import {
  Scissors,
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="eyebrow">
            WELCOME TO LUXE BEAUTY SALON
          </p>

          <h1>
            BEAUTY THAT
            <br />
            MAKES YOU <em>SHINE</em>
          </h1>

          <p className="hero-description">
            Discover beautiful hair, flawless nails and a relaxing
            salon experience created just for you.
          </p>

          <div className="hero-buttons">

            <Link to="/booking" className="btn-primary">
              <CalendarDays size={18} />
              Book Appointment
            </Link>

            <Link to="/services" className="btn-outline">
              Explore Services
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

        <div className="scroll-indicator">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* INTRO */}
      <section className="intro section-padding">

        <div className="intro-content">

          <div className="section-label">
            YOUR BEAUTY, OUR PASSION
          </div>

          <h2>
            Where beauty meets
            <em> confidence.</em>
          </h2>

          <p>
            At Luxe Beauty Salon, we believe beauty is more than
            appearance. It's about feeling confident, comfortable
            and completely yourself.
          </p>

          <p>
            From beautiful hairstyles to relaxing beauty treatments,
            our goal is to give every client an experience worth
            remembering.
          </p>

          <Link to="/about" className="text-link">
            Discover Our Story
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="intro-card">

          <div className="intro-card-inner">

            <Sparkles size={32} />

            <h3>
              BEAUTY
              <br />
              WITH PURPOSE
            </h3>

            <p>
              Every detail matters.
            </p>

          </div>

        </div>

      </section>


      {/* SERVICES PREVIEW */}
      <section className="services-preview section-padding">

        <div className="section-heading">

          <div>
            <div className="section-label">
              WHAT WE OFFER
            </div>

            <h2>
              Our <em>Services</em>
            </h2>
          </div>

          <Link to="/services" className="text-link">
            View All Services
            <ArrowRight size={18} />
          </Link>

        </div>


        <div className="service-grid">

          <div className="service-card">

            <div className="service-icon">
              <Scissors size={28} />
            </div>

            <h3>Hair Styling</h3>

            <p>
              Beautiful cuts, styling and treatments
              designed to bring out your best look.
            </p>

            <Link to="/services">
              Explore
              <ArrowRight size={16} />
            </Link>

          </div>


          <div className="service-card">

            <div className="service-icon">
              <Sparkles size={28} />
            </div>

            <h3>Braiding</h3>

            <p>
              Elegant braids and protective styles
              created with care and precision.
            </p>

            <Link to="/services">
              Explore
              <ArrowRight size={16} />
            </Link>

          </div>


          <div className="service-card">

            <div className="service-icon">
              <Heart size={28} />
            </div>

            <h3>Nails & Beauty</h3>

            <p>
              Beautiful nails and beauty treatments
              for the perfect finishing touch.
            </p>

            <Link to="/services">
              Explore
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* WHY US */}
      <section className="why-section section-padding">

        <div className="why-content">

          <div className="section-label">
            WHY CHOOSE LUXE
          </div>

          <h2>
            More than a salon.
            <br />
            It's your <em>beauty space.</em>
          </h2>

          <p>
            We create a welcoming environment where you can
            relax, refresh and leave feeling confident.
          </p>

        </div>


        <div className="why-grid">

          <div>
            <span>01</span>
            <h3>Professional Team</h3>
            <p>
              Skilled beauty professionals who care about
              every detail.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Quality Service</h3>
            <p>
              We use quality products and techniques
              to give you beautiful results.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Client First</h3>
            <p>
              Your comfort, preferences and satisfaction
              always come first.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Beautiful Results</h3>
            <p>
              We want you to leave feeling confident
              and ready to shine.
            </p>
          </div>

        </div>

      </section>


      {/* TESTIMONIAL */}
      <section className="testimonial section-padding">

        <div className="stars">
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
        </div>

        <blockquote>
          “The experience was amazing. I loved my hair
          and the service was excellent.”
        </blockquote>

        <p>— Happy Luxe Client</p>

      </section>


      {/* BOOKING CTA */}
      <section className="booking-cta">

        <div className="booking-overlay"></div>

        <div className="booking-content">

          <div className="section-label">
            READY FOR YOUR NEXT LOOK?
          </div>

          <h2>
            Let's make you
            <br />
            <em>shine.</em>
          </h2>

          <Link to="/booking" className="btn-primary">
            <CalendarDays size={18} />
            Book Your Appointment
          </Link>

        </div>

      </section>
    </>
  );
}

export default Home;