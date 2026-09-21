import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

function AdmissionBanner() {
  return (
    <section className="admission-banner-section">
      <div className="container">
        <div className="admission-banner">

          {/* Background Decoration */}

          <div className="admission-banner-decoration admission-decoration-one"></div>
          <div className="admission-banner-decoration admission-decoration-two"></div>


          <div className="row align-items-center position-relative">

            {/* Content */}

            <div className="col-lg-8">
              <div className="admission-banner-content">

                <span className="admission-banner-label">
                  ADMISSIONS OPEN
                </span>

                <h2>
                  Give Your Child a <span>Brighter Future</span>
                </h2>

                <p>
                  Join Adarsha Academy, Palhazi and provide your child
                  with an inspiring environment for learning, growth
                  and success.
                </p>

                <div className="admission-banner-buttons">

                  <Link
                    to="/admission"
                    className="admission-primary-button"
                  >
                    Apply for Admission
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/contact"
                    className="admission-secondary-button"
                  >
                    <Phone size={17} />
                    Contact Us
                  </Link>

                </div>

              </div>
            </div>


            {/* Right Side */}

            <div className="col-lg-4">
              <div className="admission-banner-side">

                <div className="admission-side-circle">
                  <span>2026</span>
                  <small>ADMISSIONS</small>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionBanner;