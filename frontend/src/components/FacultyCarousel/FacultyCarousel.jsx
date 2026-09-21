import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const facultyMembers = [
  {
    id: 1,
    name: "Mr. Rajesh Sharma",
    qualification: "M.A. (Education)",
    experience: "18+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 2,
    name: "Mrs. Anjali Das",
    qualification: "M.Sc. (Mathematics)",
    experience: "12+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 3,
    name: "Mr. Dipankar Barman",
    qualification: "B.Sc. (Physics)",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 4,
    name: "Mrs. Priyanka Kalita",
    qualification: "M.A. (English)",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 5,
    name: "Mr. Amit Kumar",
    qualification: "M.Sc. (Science)",
    experience: "9+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 6,
    name: "Mrs. Nandita Bora",
    qualification: "M.A. (History)",
    experience: "7+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=700&q=85",
  },
];


function FacultyCarousel() {
  return (
    <section className="faculty-section">

      {/* =========================================
          SECTION HEADER
      ========================================== */}

      <div className="container">

        <div className="section-heading text-center">

          <span className="section-small-title">
            OUR TEACHERS
          </span>

          <h2>
            Meet Our <span>Faculty</span>
          </h2>

          <div className="section-heading-line"></div>

          <p>
            Dedicated educators committed to guiding,
            supporting and inspiring our students.
          </p>

        </div>

      </div>


      {/* =========================================
          FACULTY CAROUSEL
      ========================================== */}

      <div className="container">

        <div className="faculty-carousel-wrapper">

          <Swiper
            modules={[
              Autoplay,
              Navigation,
              Pagination,
            ]}

            spaceBetween={22}

            slidesPerView={1}

            loop={true}

            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}

            navigation={{
              prevEl: ".faculty-prev",
              nextEl: ".faculty-next",
            }}

            pagination={{
              clickable: true,
            }}

            breakpoints={{
              576: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 3,
              },

              1200: {
                slidesPerView: 4,
              },
            }}

            className="faculty-swiper"
          >

            {facultyMembers.map((faculty) => (

              <SwiperSlide key={faculty.id}>

                <div className="faculty-card">

                  {/* TEACHER IMAGE */}

                  <div className="faculty-image-wrapper">

                    <img
                      src={faculty.image}
                      alt={`${faculty.name} - ${faculty.qualification}`}
                      className="faculty-image"
                    />

                    <div className="faculty-image-overlay"></div>

                  </div>


                  {/* TEACHER INFORMATION */}

                  <div className="faculty-card-content">

                    <h3>
                      {faculty.name}
                    </h3>

                    <p className="faculty-qualification">
                      {faculty.qualification}
                    </p>

                    <p className="faculty-experience">
                      ({faculty.experience})
                    </p>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>


          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            className="faculty-prev"
            aria-label="Previous faculty"
          >
            ‹
          </button>


          {/* NEXT BUTTON */}

          <button
            type="button"
            className="faculty-next"
            aria-label="Next faculty"
          >
            ›
          </button>

        </div>

      </div>

    </section>
  );
}


export default FacultyCarousel;