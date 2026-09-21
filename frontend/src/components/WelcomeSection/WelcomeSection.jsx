import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-grid">

          {/* IMAGE */}
          <div className="welcome-cell">
            <div className="welcome-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?auto=format&fit=crop&w=1200&q=85"
                alt="Students learning at Adarsha Academy"
                className="welcome-image"
              />

              <div className="welcome-experience-box">
                <strong>ADARSHA</strong>
                <span>ACADEMY</span>
                <small>PALHAZI</small>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="welcome-cell">
            <div className="welcome-content">

              <span className="section-small-title">
                ABOUT OUR SCHOOL
              </span>

              <h2>
                Welcome to <span>Adarsha Academy</span>
              </h2>

              <div className="section-title-line"></div>

              <p className="welcome-intro">
                Adarsha Academy, Palhazi, is committed to providing
                quality education in a supportive and inspiring
                environment where students can learn, grow and
                achieve their potential.
              </p>

              <p>
                We believe that education is not only about academic
                achievement. It is also about developing discipline,
                confidence, creativity, good character and a sense
                of responsibility towards society.
              </p>

              <div className="welcome-bottom-row">
                <div className="welcome-features">

                  <div className="welcome-feature">
                    <CheckCircle2 size={20} />
                    <span>Quality Education</span>
                  </div>

                  <div className="welcome-feature">
                    <CheckCircle2 size={20} />
                    <span>Student Development</span>
                  </div>

                  <div className="welcome-feature">
                    <CheckCircle2 size={20} />
                    <span>Discipline &amp; Values</span>
                  </div>

                  <div className="welcome-feature">
                    <CheckCircle2 size={20} />
                    <span>Supportive Learning</span>
                  </div>

                </div>

                <Link
                  to="/about"
                  className="welcome-more-btn"
                >
                  Learn More
                  <ArrowRight size={17} />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;