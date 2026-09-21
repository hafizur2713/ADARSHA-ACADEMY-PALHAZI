import {
  Download,
  FileText,
  ClipboardCheck,
  FolderCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

function Admission() {
  return (
    <>
      {/* =========================================
          ADMISSION INTRODUCTION
      ========================================= */}

      <section className="admission-intro-section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-small-title">
              ADMISSIONS OPEN
            </span>

            <h2>
              Join <span>Adarsha Academy</span>
            </h2>

            <div className="section-heading-line"></div>

            <p>
              Follow the steps below to complete the admission
              process. Please read the instructions carefully
              before submitting your application.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          DOWNLOAD ADMISSION FORM
      ========================================= */}

      <section className="admission-download-section">
        <div className="container">
          <div className="admission-download-card">

            <div className="admission-download-icon">
              <FileText size={35} />
            </div>

            <div className="admission-download-content">
              <span className="admission-card-label">
                STEP 01
              </span>

              <h2>Download Admission Form</h2>

              <p>
                Download the latest admission form provided
                by the school. The form and document requirements
                may be updated by the administration.
              </p>

              <a
                href="/admission-form.pdf"
                className="admission-download-button"
                download
              >
                <Download size={18} />
                Download Admission Form
              </a>

              <small>
                PDF format • Check the latest uploaded document
              </small>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          ADMISSION STEPS
      ========================================= */}

      <section className="admission-process-section">
        <div className="container">

          <div className="section-heading text-center">
            <span className="section-small-title">
              HOW TO APPLY
            </span>

            <h2>
              Admission <span>Process</span>
            </h2>

            <div className="section-heading-line"></div>

            <p>
              Complete the following steps to submit your
              admission application.
            </p>
          </div>

          <div className="admission-process-grid">

            {/* Step 1 */}
            <div className="admission-process-card">
              <div className="admission-step-number">
                01
              </div>

              <div className="admission-step-icon">
                <Download size={28} />
              </div>

              <h3>Download the Form</h3>

              <p>
                Download the latest admission form PDF
                from the school website.
              </p>
            </div>

            {/* Step 2 */}
            <div className="admission-process-card">
              <div className="admission-step-number">
                02
              </div>

              <div className="admission-step-icon">
                <ClipboardCheck size={28} />
              </div>

              <h3>Fill in the Form</h3>

              <p>
                Carefully fill out all the required details
                in the downloaded admission form.
              </p>
            </div>

            {/* Step 3 */}
            <div className="admission-process-card">
              <div className="admission-step-number">
                03
              </div>

              <div className="admission-step-icon">
                <FolderCheck size={28} />
              </div>

              <h3>Prepare Documents</h3>

              <p>
                Prepare the required documents mentioned
                in the downloaded admission PDF.
              </p>
            </div>

            {/* Step 4 */}
            <div className="admission-process-card">
              <div className="admission-step-number">
                04
              </div>

              <div className="admission-step-icon">
                <Building2 size={28} />
              </div>

              <h3>Submit at School Office</h3>

              <p>
                Submit the completed form and required
                documents to the school office.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          DOCUMENT NOTICE
      ========================================= */}

      <section className="admission-document-section">
        <div className="container">
          <div className="admission-document-box">

            <div className="admission-document-heading">
              <CheckCircle2 size={25} />

              <h2>Required Documents</h2>
            </div>

            <p>
              The required document list will be provided
              in the latest admission form PDF downloaded
              from this website.
            </p>

            <div className="admission-document-note">
              <strong>Important:</strong>

              <span>
                Please check the downloaded PDF for the
                complete and updated list of required documents.
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="admission-final-section">
        <div className="container">
          <div className="admission-final-card">

            <h2>
              Need More Information?
            </h2>

            <p>
              Contact the school office for admission-related
              questions and further instructions.
            </p>

            <Link
              to="/contact"
              className="admission-contact-button"
            >
              Contact School
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}

export default Admission;
