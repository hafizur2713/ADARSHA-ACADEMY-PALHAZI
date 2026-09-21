import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryCategories = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "events", label: "Events" },
  { id: "sports", label: "Sports" },
  { id: "academics", label: "Academics" },
];

const galleryImages = [
  {
    id: 1,
    category: "campus",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=90",
    caption: "School Building",
  },
  {
    id: 2,
    category: "academics",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=90",
    caption: "Classroom Learning",
  },
  {
    id: 3,
    category: "events",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=90",
    caption: "Annual Day Celebration",
  },
  {
    id: 4,
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=90",
    caption: "Sports Day",
  },
  {
    id: 5,
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=90",
    caption: "Athletic Events",
  },
  {
    id: 6,
    category: "academics",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=90",
    caption: "Science Lab",
  },
  {
    id: 7,
    category: "campus",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=90",
    caption: "School Campus View",
  },
  {
    id: 8,
    category: "events",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=90",
    caption: "Cultural Programme",
  },
  {
    id: 9,
    category: "academics",
    image:
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?auto=format&fit=crop&w=1200&q=90",
    caption: "Group Study Session",
  },
  {
    id: 10,
    category: "campus",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=90",
    caption: "Library",
  },
  {
    id: 11,
    category: "events",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=90",
    caption: "Graduation Ceremony",
  },
  {
    id: 12,
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=90",
    caption: "Cricket Match",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxCaption, setLightboxCaption] = useState("");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (image, caption) => {
    setLightboxImage(image);
    setLightboxCaption(caption);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxCaption("");
  };

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* GALLERY SECTION */}
      <section className="gallery-page-section">
        <div className="container">
          {/* Section Heading */}
          <div className="section-heading text-center" style={{ marginTop: '20px', marginBottom: '40px' }}>
            <span className="section-small-title">
              OUR GALLERY
            </span>
            <h2>
              Moments at <span>Adarsha Academy</span>
            </h2>
            <div className="section-heading-line"></div>
            <p>
              Explore some memorable moments from our school community.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="gallery-filters" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {galleryCategories.map(cat => (
              <button 
                key={cat.id} 
                className={`gallery-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '30px',
                  border: 'none',
                  background: activeCategory === cat.id ? 'var(--school-yellow)' : '#f0f4f8',
                  color: activeCategory === cat.id ? 'var(--school-blue-dark)' : 'var(--text-gray)',
                  fontWeight: activeCategory === cat.id ? '700' : '500',
                  cursor: 'pointer',
                  transition: '0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="gallery-page-grid">
            {filteredImages.map((item) => (
              <div className="gallery-page-cell" key={item.id}>
                <div
                  className="gallery-page-card"
                  onClick={() => openLightbox(item.image, item.caption)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      openLightbox(item.image, item.caption);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="gallery-page-image"
                  />
                  <div className="gallery-page-overlay">
                    <ZoomIn size={28} className="gallery-page-zoom-icon" />
                    <span className="gallery-page-caption">{item.caption}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            <X size={24} />
          </button>
          <img
            src={lightboxImage}
            alt={lightboxCaption}
            className="gallery-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          {lightboxCaption && (
            <p className="gallery-lightbox-caption">{lightboxCaption}</p>
          )}
        </div>
      )}
    </>
  );
}

export default Gallery;
