import {
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Users,
  Lightbulb,
  Trophy,
} from "lucide-react";

const academicFeatures = [
  {
    id: 1,
    icon: BookOpen,
    title: "Quality Education",
    description:
      "A learning environment focused on developing strong academic foundations and essential knowledge.",
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Student Development",
    description:
      "Encouraging students to build confidence, creativity and important life skills.",
  },
  {
    id: 3,
    icon: ClipboardCheck,
    title: "Academic Support",
    description:
      "Supporting students through regular learning activities, guidance and academic improvement.",
  },
  {
    id: 4,
    icon: Users,
    title: "Interactive Learning",
    description:
      "Promoting classroom participation, collaboration and a positive learning experience.",
  },
  {
    id: 5,
    icon: Lightbulb,
    title: "Creative Activities",
    description:
      "Encouraging curiosity, problem-solving and creative thinking among students.",
  },
  {
    id: 6,
    icon: Trophy,
    title: "Overall Growth",
    description:
      "Supporting academic, physical, social and personal development.",
  },
];

function Academics() {
  return (
    <>
      {/* Academic Introduction */}
      <section className="academics-intro-section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-cell">
              <div className="about-page-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=90"
                  alt="Students learning in a classroom"
                  className="about-page-image"
                />
              </div>
            </div>

            <div className="about-intro-cell">
              <span className="section-small-title">
                OUR ACADEMIC APPROACH
              </span>

              <h2 className="academics-page-title">
                Learning Today, <span>Leading Tomorrow</span>
              </h2>

              <div className="section-heading-line"></div>

              <p>
                At Adarsha Academy, we aim to create a learning environment
                where students can strengthen their academic knowledge and
                develop confidence.
              </p>

              <p>
                Our educational approach focuses on learning, discipline,
                participation and the overall development of every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="academic-features-section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-small-title">WHAT WE FOCUS ON</span>

            <h2>
              Our Academic <span>Features</span>
            </h2>

            <div className="section-heading-line"></div>

            <p>
              Encouraging students to learn, explore and grow in a supportive
              educational environment.
            </p>
          </div>

          <div className="about-values-grid">
            {academicFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div className="about-values-cell" key={feature.id}>
                  <div className="academic-feature-card">
                    <div className="academic-feature-icon">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>

                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Academics;