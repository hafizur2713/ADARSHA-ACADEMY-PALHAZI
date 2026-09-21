import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const galleryItems = [
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
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?auto=format&fit=crop&w=1200&q=90",
  },
];

function GalleryPreview() {
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
      <section className="gallery-preview-section">
        <div className="container">
          {/* Section Heading */}
          <div className="section-heading text-center">
            <span className="section-small-title">
              OUR GALLERY
            </span>

            <h2>
              Moments at <span>Adarsha Academy</span>
            </h2>

            <div className="section-heading-line"></div>

            <p>
              Explore some memorable moments from our school
              community.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-preview-grid">
            {galleryItems.map((item) => (
              <div
                className="gallery-preview-cell"
                key={item.id}
              >
                <div
                  className="gallery-preview-card"
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
                  <div className="gallery-preview-image-wrapper">
                    <img
                      src={item.image}
                      alt={`Adarsha Academy gallery ${item.id}`}
                      className="gallery-preview-image"
                      loading="lazy"
                    />
                    <div className="gallery-color-overlay" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="gallery-preview-button-wrapper">
            <Link
              to="/gallery"
              className="gallery-preview-button"
            >
              View All Photos
              <ArrowRight size={17} />
            </Link>
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

export default GalleryPreview;