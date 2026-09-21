import React from "react";


const infrastructureData = [
  {
    title: "Modern Classrooms",
    description:
      "Spacious and well-ventilated classrooms designed for effective learning.",
    icon: "🏫",
  },
  {
    title: "Science Laboratory",
    description:
      "Well-equipped laboratory facilities for practical learning and experiments.",
    icon: "🔬",
  },
  {
    title: "Computer Laboratory",
    description:
      "Computer facilities to improve students' digital knowledge and technical skills.",
    icon: "💻",
  },
  {
    title: "Library",
    description:
      "A learning space with educational books and resources for students.",
    icon: "📚",
  },
  {
    title: "Playground",
    description:
      "Outdoor space for sports, physical activities, and student development.",
    icon: "⚽",
  },
  {
    title: "Safe Campus",
    description:
      "A secure and disciplined campus that supports a positive learning environment.",
    icon: "🛡️",
  },
];

const Infrastructure = () => {
  return (
    <div className="infrastructure-page">



      {/* Introduction */}
      <section className="infrastructure-intro section-padding">
        <div className="container">
          <div className="section-heading text-center">
            <p className="section-subtitle">Our Facilities</p>
            <h2>Learning Beyond the Classroom</h2>
            <div className="heading-line"></div>
          </div>

          <p className="infrastructure-intro-text">
            Adarsha Academy focuses on providing a supportive and
            student-friendly environment. Our infrastructure is designed
            to encourage academic excellence, creativity, discipline,
            and overall personality development.
          </p>
        </div>
      </section>

      {/* Infrastructure Cards */}
      <section className="infrastructure-facilities section-padding">
        <div className="container">
          <div className="row g-4">
            {infrastructureData.map((facility, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="facility-card">

                  <div className="facility-icon">
                    {facility.icon}
                  </div>

                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Gallery */}
      <section className="infrastructure-gallery section-padding">
        <div className="container">
          <div className="section-heading text-center">
            <p className="section-subtitle">Campus Gallery</p>
            <h2>Explore Our Campus</h2>
            <div className="heading-line"></div>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="infrastructure-image-card">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                  alt="School building"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="infrastructure-image-card">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
                  alt="School classroom"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="infrastructure-image-card">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  alt="Students in classroom"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Infrastructure;