import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const resultBanners = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=90",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1800&q=90",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1800&q=90",
  },
];


function ResultsCarousel() {
  return (
    <section className="results-section">

      <div className="container">
        {/* Section Heading */}
        <div className="section-heading text-center">
          <span className="section-small-title">
            OUR RESULTS
          </span>

          <h2>
            Academic <span>Excellence</span>
          </h2>

          <div className="section-heading-line"></div>

          <p>
            Celebrating the outstanding achievements of our students.
          </p>
        </div>

        {/* ONE FULL-WIDTH BOOTSTRAP COLUMN */}

        <div className="row">

          <div className="col-12">

            <div className="results-carousel-wrapper">

              <Swiper
                modules={[
                  Autoplay,
                  Pagination,
                ]}

                slidesPerView={1}

                spaceBetween={0}

                loop={true}

                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}

                pagination={{
                  clickable: true,
                }}

                className="results-swiper"
              >

                {resultBanners.map((banner) => (

                  <SwiperSlide key={banner.id}>

                    <div className="result-banner">

                      <img
                        src={banner.image}
                        alt="Adarsha Academy Result"
                        className="result-banner-image"
                      />

                    </div>

                  </SwiperSlide>

                ))}

              </Swiper>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


export default ResultsCarousel;