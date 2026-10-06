import { Link } from "react-router-dom";
import {
  Scissors,
  Sparkles,
  Crown,
  Palette,
  Flower2,
  Waves,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    category: "HAIR",
    name: "Hair Styling",
    description:
      "Professional hair styling for everyday looks, events and special occasions.",
  },
  {
    icon: Sparkles,
    category: "BRAIDS",
    name: "Braiding",
    description:
      "Neat and stylish braids created with care, precision and attention to detail.",
  },
  {
    icon: Crown,
    category: "WEAVING",
    name: "Weaving & Extensions",
    description:
      "Beautiful weaving and extension styles designed for a polished and confident look.",
  },
  {
    icon: Flower2,
    category: "NATURAL HAIR",
    name: "Natural Hair",
    description:
      "Careful styling and treatment for natural hair while maintaining its beauty and health.",
  },
  {
    icon: Waves,
    category: "HAIR CARE",
    name: "Hair Treatment",
    description:
      "Hair care treatments designed to refresh, strengthen and maintain healthy-looking hair.",
  },
  {
    icon: Palette,
    category: "COLOR",
    name: "Hair Coloring",
    description:
      "Give your hair a fresh new look with carefully selected colors and professional application.",
  },
];

function Services() {
  return (
    <div className="page">

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">
          <div className="section-label">
            LUXE BEAUTY SALON
          </div>

          <h1>
            Hair <em>Services</em>
          </h1>

          <p>
            Professional hair styling created to help you
            look your best and leave with a style you love.
          </p>
        </div>
      </section>


      {/* SERVICES */}
      <section className="all-services section-padding">

        <div className="services-intro">

          <div>
            <div className="section-label">
              HAIR & STYLE
            </div>

            <h2>
              Your hair,
              <br />
              <em>your style.</em>
            </h2>
          </div>

          <p>
            From beautiful everyday styles to special
            occasion looks, we take the time to create
            hairstyles that suit you, your hair and your
            personal style.
          </p>

        </div>


        {/* SERVICE CARDS */}
        <div className="all-services-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                className="full-service-card"
                key={service.name}
              >

                {/* NUMBER */}
                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* ICON */}
                <div className="service-icon">
                  <Icon size={28} />
                </div>


                {/* CATEGORY */}
                <span className="service-category">
                  {service.category}
                </span>


                {/* SERVICE NAME */}
                <h3>
                  {service.name}
                </h3>


                {/* DESCRIPTION */}
                <p>
                  {service.description}
                </p>


                {/* BOOK */}
                <div className="service-bottom">

                  <div>
                    <small>
                      APPOINTMENT
                    </small>

                    <strong>
                      Price on request
                    </strong>
                  </div>

                  <Link to="/booking">
                    Book
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>
            );

          })}

        </div>

      </section>


      {/* SERVICE NOTE */}
      <section className="service-note section-padding">

        <div className="service-note-inner">

          <div className="section-label">
            YOUR STYLE MATTERS
          </div>

          <h2>
            Hair that feels
            <br />
            <em>like you.</em>
          </h2>

          <p>
            Every hairstyle is different. Pricing may depend
            on hair length, style, extensions, products and
            the amount of work required. Contact us before
            your appointment for an accurate quote.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="services-cta">

        <div>

          <div className="section-label">
            YOUR NEXT LOOK STARTS HERE
          </div>

          <h2>
            Ready for your
            <br />
            <em>next look?</em>
          </h2>

          <Link
            to="/booking"
            className="btn-primary"
          >
            <CalendarDays size={18} />
            Book an Appointment
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Services;