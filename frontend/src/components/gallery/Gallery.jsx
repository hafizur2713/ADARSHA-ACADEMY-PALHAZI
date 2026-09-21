import { useEffect, useState } from "react";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=90",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* Gallery Hero */}
      <section className="inner-page-hero">
        <div className="container">
          <div className="inner-page-hero-content">
            <span>ADARSHA ACADEMY</span>

            <h1>School Gallery</h1>

            <p>
              Explore memorable moments and activities from
              Adarsha Academy, Palhazi.
            </p>
          </div>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="full-gallery-section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-small-title">
              SCHOOL MOMENTS
            </span>

            <h2>
              Our <span>Gallery</span>
            </h2>

            <div className="section-heading-line"></div>

            <p>
              A collection of memorable moments from our
              school campus, activities and events.
            </p>
          </div>

          {/* Responsive Gallery Grid */}
          <div className="full-gallery-grid">
            {galleryImages.map((item) => (
              <div
                className="full-gallery-cell"
                key={item.id}
              >
                <div
                  className="full-gallery-card"
                  onClick={() => setSelectedImage(item.image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      setSelectedImage(item.image);
                    }
                  }}
                >
                  <img
                    src={item.image}
                    alt={`Adarsha Academy gallery ${item.id}`}
                    className="full-gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-color-overlay" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Adarsha Academy"
            className="gallery-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default Gallery;