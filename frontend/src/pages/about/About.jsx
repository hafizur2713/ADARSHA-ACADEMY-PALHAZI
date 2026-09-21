import { CheckCircle, Target, Eye, Award } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* About Introduction */}
      <section className="about-page-section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-cell">
              <div className="about-page-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=90"
                  alt="Adarsha Academy campus"
                  className="about-page-image"
                />
              </div>
            </div>

            <div className="about-intro-cell">
              <span className="section-small-title">WHO WE ARE</span>

              <h2 className="about-page-title">
                Welcome to <span>Adarsha Academy</span>
              </h2>

              <div className="section-heading-line"></div>

              <p>
                Adarsha Academy, Palhazi, is committed to providing a
                supportive educational environment where students can develop
                knowledge, confidence, discipline and strong values.
              </p>

              <p>
                Our aim is to encourage students to learn, explore their
                abilities and prepare themselves for future opportunities.
              </p>

              <div className="about-feature-list">
                <div>
                  <CheckCircle size={19} />
                  Quality learning environment
                </div>

                <div>
                  <CheckCircle size={19} />
                  Focus on discipline and values
                </div>

                <div>
                  <CheckCircle size={19} />
                  Overall student development
                </div>

                <div>
                  <CheckCircle size={19} />
                  Supportive teaching approach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-small-title">OUR FOUNDATION</span>

            <h2>
              Our Mission, Vision & <span>Values</span>
            </h2>

            <div className="section-heading-line"></div>

            <p>
              Building a strong foundation for learning and personal growth.
            </p>
          </div>

          <div className="about-values-grid">
            <div className="about-values-cell">
              <div className="about-value-card">
                <div className="about-value-icon">
                  <Target size={30} />
                </div>

                <h3>Our Mission</h3>

                <p>
                  To support students through meaningful education, discipline
                  and opportunities for continuous development.
                </p>
              </div>
            </div>

            <div className="about-values-cell">
              <div className="about-value-card">
                <div className="about-value-icon">
                  <Eye size={30} />
                </div>

                <h3>Our Vision</h3>

                <p>
                  To nurture confident, responsible and knowledgeable
                  individuals prepared for the future.
                </p>
              </div>
            </div>

            <div className="about-values-cell">
              <div className="about-value-card">
                <div className="about-value-icon">
                  <Award size={30} />
                </div>

                <h3>Our Values</h3>

                <p>
                  We encourage honesty, respect, responsibility, discipline
                  and a positive attitude toward learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="about-page-cta">
        <div className="container text-center">
          <h2>Discover Our Learning Environment</h2>

          <p>
            Explore our academics, facilities and student-focused activities.
          </p>

          <Link to="/academics" className="about-cta-button">
            Explore Academics
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;