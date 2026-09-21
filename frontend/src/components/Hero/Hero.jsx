import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const heroSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",
    badge: "WELCOME TO",
    title: "Adarsha Academy",
    subtitle: "Palhazi, Barpeta, Assam",
    description:
      "Nurturing young minds with knowledge, discipline, creativity and confidence.",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=85",
    badge: "LEARN • GROW • SUCCEED",
    title: "A Brighter Future",
    subtitle: "Begins With Quality Education",
    description:
      "We strive to create a supportive learning environment where every student can discover their potential.",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2000&q=85",
    badge: "ADMISSIONS",
    title: "Shape Your Future",
    subtitle: "Join Adarsha Academy",
    description:
      "Building confident, responsible and capable learners ready to make a positive difference.",
  },
];

function Hero() {
  return (
    <section className="hero-section">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="hero-swiper"
      >

        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div className="hero-slide">

              <img
                src={slide.image}
                alt="Adarsha Academy campus"
                className="hero-image"
              />

              <div className="hero-overlay"></div>

              <div className="container hero-content">

                <div className="hero-content-inner">

                  <span className="hero-badge">
                    {slide.badge}
                  </span>

                  <h2>
                    {slide.title}
                  </h2>

                  <h3>
                    {slide.subtitle}
                  </h3>

                  <p>
                    {slide.description}
                  </p>

                  <div className="hero-buttons">

                    <Link
                      to="/about"
                      className="hero-primary-btn"
                    >
                      Explore Our School
                    </Link>

                    <Link
                      to="/admission"
                      className="hero-secondary-btn"
                    >
                      Admission Enquiry
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}

export default Hero;