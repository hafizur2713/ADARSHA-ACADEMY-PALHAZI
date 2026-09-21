import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* =========================================
          CONTACT INTRODUCTION
      ========================================= */}

      <section className="contact-intro-section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-small-title">
              GET IN TOUCH
            </span>

            <h2>
              Contact <span>Our School</span>
            </h2>

            <div className="section-heading-line"></div>

            <p>
              For admission enquiries, school information,
              and other queries, please contact us using
              the details below.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT INFORMATION
      ========================================= */}

      <section className="contact-information-section">
        <div className="container">
          <div className="contact-information-grid">

            {/* Address */}
            <div className="contact-information-card">
              <div className="contact-information-icon">
                <MapPin size={26} />
              </div>

              <h3>School Address</h3>

              <p>
                Palhazi, Barpeta,
                <br />
                Assam - 781309
              </p>
            </div>

            {/* Phone */}
            <div className="contact-information-card">
              <div className="contact-information-icon">
                <Phone size={26} />
              </div>

              <h3>Phone Number</h3>

              <p>
                <a href="tel:+918638372785">
                  +91 86383 72785
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="contact-information-card">
              <div className="contact-information-icon">
                <Mail size={26} />
              </div>

              <h3>Email Address</h3>

              <p>
                <a href="mailto:adarshaacademypalhazi@gmail.com">
                  adarshaacademypalhazi@gmail.com
                </a>
              </p>
            </div>

            {/* Office Hours */}
            <div className="contact-information-card">
              <div className="contact-information-icon">
                <Clock size={26} />
              </div>

              <h3>Office Hours</h3>

              <p>
                Monday – Saturday
                <br />
                Please contact the school office
                for current timings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT FORM + MAP
      ========================================= */}

      <section className="contact-main-section">
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="contact-form-wrapper">

                <div className="contact-form-heading">
                  <span className="section-small-title">
                    SEND A MESSAGE
                  </span>

                  <h2>
                    Write to <span>Us</span>
                  </h2>

                  <p>
                    Fill in the form below and share your
                    enquiry with us.
                  </p>
                </div>

                {submitted && (
                  <div className="contact-success-message">
                    <CheckCircle2 size={20} />

                    <span>
                      Your message has been submitted
                      successfully.
                    </span>
                  </div>
                )}

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="contact-form-group">
                    <label htmlFor="name">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="contact-form-row">

                    <div className="contact-form-group">
                      <label htmlFor="email">
                        Email Address *
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="phone">
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>

                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="subject">
                      Subject *
                    </label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="message">
                      Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit-button"
                  >
                    Send Message
                    <Send size={17} />
                  </button>

                </form>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-6">
              <div className="contact-map-wrapper">

                <div className="contact-map-heading">
                  <span className="section-small-title">
                    OUR LOCATION
                  </span>

                  <h2>
                    Find Us on <span>Map</span>
                  </h2>
                </div>

                <div className="contact-map">
                  <iframe
                    title="Adarsha Academy Location"
                    src="https://www.google.com/maps?q=Palhazi%2C%20Barpeta%2C%20Assam%20781309&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  ></iframe>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Palhazi%2C+Barpeta%2C+Assam+781309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-link"
                >
                  Get Directions ↗
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT NOTICE
      ========================================= */}

      <section className="contact-notice-section">
        <div className="container">
          <div className="contact-notice-box">

            <Phone size={25} />

            <div>
              <h3>Admission Enquiries</h3>

              <p>
                For admission-related information,
                please contact the school office directly.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
