import { Link } from "react-router-dom";
import {
  Scissors,
  Sparkles,
  Heart,
  Crown,
  Palette,
  Flower2,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    category: "HAIR",
    name: "Hair Styling",
    description:
      "Professional styling for everyday looks, events and special occasions.",
    price: "From KSh 800",
  },
  {
    icon: Sparkles,
    category: "BRAIDS",
    name: "Braiding",
    description:
      "Neat and stylish braids created with care, precision and attention to detail.",
    price: "From KSh 1,000",
  },
  {
    icon: Crown,
    category: "HAIR",
    name: "Weaving",
    description:
      "Beautiful weaving styles for a polished, elegant and confident look.",
    price: "From KSh 1,500",
  },
  {
    icon: Flower2,
    category: "NATURAL HAIR",
    name: "Natural Hair Care",
    description:
      "Gentle care, treatment and styling designed to keep your natural hair looking healthy.",
    price: "From KSh 800",
  },
  {
    icon: Palette,
    category: "COLOR",
    name: "Hair Coloring",
    description:
      "Give your hair a fresh new look with carefully selected colors and professional application.",
    price: "From KSh 1,500",
  },
  {
    icon: Heart,
    category: "BEAUTY",
    name: "Nails & Beauty",
    description:
      "Relaxing nail and beauty treatments that add the perfect finishing touch to your look.",
    price: "From KSh 500",
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
            Our <em>Services</em>
          </h1>

          <p>
            Beauty care designed to help you look beautiful,
            feel confident and leave feeling renewed.
          </p>

        </div>

      </section>


      {/* SERVICES */}
      <section className="all-services section-padding">

        <div className="services-intro">

          <div>

            <div className="section-label">
              BEAUTY & CARE
            </div>

            <h2>
              Designed around
              <br />
              <em>you.</em>
            </h2>

          </div>

          <p>
            From everyday styling to special occasions,
            our services are created to give you a beautiful
            experience and results you'll love.
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


                {/* PRICE + BOOK */}
                <div className="service-bottom">

                  <div>
                    <small>PRICE</small>
                    <strong>{service.price}</strong>
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
            A LITTLE NOTE
          </div>

          <h2>
            Your beauty,
            <br />
            <em>your way.</em>
          </h2>

          <p>
            Prices shown are starting prices and may vary depending
            on hair length, style, products and treatment requirements.
            Contact us before your appointment for an accurate quote.
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
            Ready to feel
            <br />
            <em>beautiful?</em>
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