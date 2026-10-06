import { useState } from "react";
import {
  CalendarDays,
  Clock,
  User,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

// Your salon WhatsApp number
const whatsappNumber = "254789726060";

const services = [
  "Hair Styling",
  "Braiding",
  "Weaving",
  "Natural Hair Care",
  "Hair Coloring",
  "Nails & Beauty",
];

function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendWhatsApp = () => {
    const message = `Hello Luxe Beauty Salon,

I would like to book an appointment.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Preferred Date: ${form.date}
Preferred Time: ${form.time}

Additional Message:
${form.message || "None"}

Please confirm availability for my appointment.

Thank you.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const resetBooking = () => {
    setSubmitted(false);

    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="page">

      {/* HERO */}
      <section className="page-hero booking-hero">

        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">

          <div className="section-label">
            LUXE BEAUTY SALON
          </div>

          <h1>
            Book Your <em>Appointment</em>
          </h1>

          <p>
            Choose your preferred service, date and time.
            We'll be happy to welcome you.
          </p>

        </div>

      </section>


      {/* BOOKING SECTION */}
      <section className="booking-section section-padding">

        <div className="booking-layout">

          {/* LEFT SIDE */}
          <div className="booking-info">

            <div className="section-label">
              MAKE TIME FOR YOU
            </div>

            <h2>
              Your beauty
              <br />
              <em>moment starts here.</em>
            </h2>

            <p>
              Tell us what you'd like, choose your preferred
              date and time, then send your request directly
              to our salon team through WhatsApp.
            </p>


            <div className="booking-info-list">

              <div>

                <CalendarDays size={21} />

                <div>
                  <strong>Choose Your Date</strong>
                  <span>
                    Select a date that works best for you.
                  </span>
                </div>

              </div>


              <div>

                <Clock size={21} />

                <div>
                  <strong>Flexible Appointment Times</strong>
                  <span>
                    Choose your preferred time and we'll check availability.
                  </span>
                </div>

              </div>


              <div>

                <MessageCircle size={21} />

                <div>
                  <strong>Easy WhatsApp Booking</strong>
                  <span>
                    Send your request directly to the salon.
                  </span>
                </div>

              </div>

            </div>


            {/* SMALL FEATURE */}
            <div className="booking-mini-card">

              <Sparkles size={20} />

              <div>
                <strong>A little time for yourself.</strong>

                <p>
                  Great hair, beautiful nails and a moment
                  to simply relax.
                </p>
              </div>

            </div>

          </div>


          {/* FORM */}
          <div className="booking-form-wrapper">

            {!submitted ? (

              <form
                className="booking-form"
                onSubmit={handleSubmit}
              >

                <div className="booking-form-header">

                  <span>
                    APPOINTMENT REQUEST
                  </span>

                  <h3>
                    Let's get you booked.
                  </h3>

                </div>


                {/* NAME + PHONE */}
                <div className="form-row">

                  <div className="form-group">

                    <label>
                      <User size={15} />
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      <Phone size={15} />
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="07XX XXX XXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* SERVICE */}
                <div className="form-group">

                  <label>
                    Service
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service}>
                        {service}
                      </option>
                    ))}

                  </select>

                </div>


                {/* DATE + TIME */}
                <div className="form-row">

                  <div className="form-group">

                    <label>
                      <CalendarDays size={15} />
                      Preferred Date
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      <Clock size={15} />
                      Preferred Time
                    </label>

                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* MESSAGE */}
                <div className="form-group">

                  <label>
                    Additional Message
                  </label>

                  <textarea
                    name="message"
                    placeholder="Tell us anything we should know about your appointment..."
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>

                </div>


                {/* SUBMIT */}
                <button
                  type="submit"
                  className="btn-primary booking-submit"
                >
                  Request Appointment
                  <ArrowLeft
                    size={17}
                    style={{ transform: "rotate(180deg)" }}
                  />
                </button>


                <p className="form-note">
                  Your request is not a confirmed appointment.
                  The salon will confirm availability with you
                  through WhatsApp.
                </p>

              </form>

            ) : (

              /* SUCCESS */
              <div className="booking-success">

                <div className="success-icon">
                  <CheckCircle size={45} />
                </div>

                <div className="section-label">
                  ALMOST THERE
                </div>

                <h3>
                  Your request is ready.
                </h3>

                <p>
                  Your appointment details have been prepared.
                  Send them to Luxe Beauty Salon through WhatsApp
                  so the salon can check availability and confirm
                  your appointment.
                </p>


                <button
                  className="btn-primary"
                  onClick={sendWhatsApp}
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>


                <button
                  className="reset-booking"
                  onClick={resetBooking}
                >
                  <ArrowLeft size={15} />
                  Make another booking
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Booking;