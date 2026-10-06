import { Heart, Sparkles, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="page-hero about-hero">

        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">

          <div className="section-label">
            GET TO KNOW US
          </div>

          <h1>
            About <em>Luxe</em>
          </h1>

          <p>
            More than beauty. A space where confidence,
            care and creativity come together.
          </p>

        </div>

      </section>


      {/* STORY */}
      <section className="about-story section-padding">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
            alt="Luxe Beauty Salon"
          />

          <div className="about-image-label">
            <span>EST.</span>
            <strong>2026</strong>
            <small>BEAUTY & CARE</small>
          </div>

        </div>


        <div className="about-story-content">

          <div className="section-label">
            OUR STORY
          </div>

          <h2>
            Beauty is about
            <br />
            how you <em>feel.</em>
          </h2>

          <p>
            Luxe Beauty Salon was created with one simple idea:
            every woman deserves a place where she can feel
            beautiful, comfortable and confident.
          </p>

          <p>
            We combine professional beauty services with a
            warm and welcoming atmosphere. From the moment
            you walk through our doors, we want you to feel
            cared for.
          </p>

          <p>
            Whether you're coming in for your regular hairstyle,
            preparing for an important occasion or simply
            taking time for yourself, Luxe is your beauty space.
          </p>

        </div>

      </section>


      {/* VALUES */}
      <section className="values-section section-padding">

        <div className="values-heading">

          <div className="section-label">
            WHAT WE BELIEVE
          </div>

          <h2>
            Our <em>values.</em>
          </h2>

        </div>


        <div className="values-grid">

          <div className="value-card">

            <div className="value-icon">
              <Heart size={27} />
            </div>

            <span>01</span>

            <h3>Care</h3>

            <p>
              Every client deserves genuine care,
              attention and respect.
            </p>

          </div>


          <div className="value-card">

            <div className="value-icon">
              <Sparkles size={27} />
            </div>

            <span>02</span>

            <h3>Quality</h3>

            <p>
              We believe beautiful results begin
              with quality service.
            </p>

          </div>


          <div className="value-card">

            <div className="value-icon">
              <Users size={27} />
            </div>

            <span>03</span>

            <h3>Community</h3>

            <p>
              We want Luxe to feel like a place
              where everyone belongs.
            </p>

          </div>


          <div className="value-card">

            <div className="value-icon">
              <Award size={27} />
            </div>

            <span>04</span>

            <h3>Excellence</h3>

            <p>
              We continuously improve our skills
              to give our clients the best.
            </p>

          </div>

        </div>

      </section>


      {/* TEAM */}
      <section className="team-section section-padding">

        <div className="team-heading">

          <div className="section-label">
            MEET THE TEAM
          </div>

          <h2>
            Passion behind
            <br />
            the <em>beauty.</em>
          </h2>

          <p>
            Our team combines creativity, experience and
            passion to help every client look and feel amazing.
          </p>

        </div>


        <div className="team-grid">

          <div className="team-card">

            <img
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=85"
              alt="Salon stylist"
            />

            <div>
              <span>HAIR STYLIST</span>
              <h3>Our Beauty Expert</h3>
            </div>

          </div>


          <div className="team-card">

            <img
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=85"
              alt="Beauty specialist"
            />

            <div>
              <span>BEAUTY SPECIALIST</span>
              <h3>Our Beauty Expert</h3>
            </div>

          </div>


          <div className="team-card">

            <img
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=85"
              alt="Salon professional"
            />

            <div>
              <span>NAIL & BEAUTY</span>
              <h3>Our Beauty Expert</h3>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <div>

          <div className="section-label">
            COME EXPERIENCE LUXE
          </div>

          <h2>
            Your beauty.
            <br />
            Your <em>moment.</em>
          </h2>

          <Link to="/booking" className="btn-primary">
            Book Your Appointment
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;