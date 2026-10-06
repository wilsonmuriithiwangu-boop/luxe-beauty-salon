import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85",
    title: "Signature Hair Styling",
    category: "HAIR",
  },
  {
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=85",
    title: "Elegant Braids",
    category: "BRAIDS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
    title: "Salon Styling",
    category: "HAIR",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=85",
    title: "Beauty Treatment",
    category: "BEAUTY",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=85",
    title: "Nail Perfection",
    category: "NAILS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    title: "Natural Hair Care",
    category: "NATURAL HAIR",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
    title: "The Luxe Experience",
    category: "SALON",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
    title: "Beautiful Finishing",
    category: "STYLE",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="page">

      {/* HERO */}
      <section className="page-hero gallery-hero">
        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">
          <div className="section-label">
            THE LUXE EXPERIENCE
          </div>

          <h1>
            Our <em>Gallery</em>
          </h1>

          <p>
            A glimpse into our work, our space and the beauty
            we create every day.
          </p>
        </div>
      </section>


      {/* GALLERY */}
      <section className="gallery-section section-padding">

        <div className="gallery-intro">

          <div>
            <div className="section-label">
              BEAUTY IN EVERY DETAIL
            </div>

            <h2>
              See the <em>Luxe</em> difference.
            </h2>
          </div>

          <p>
            Explore some of the hairstyles, beauty treatments
            and special moments created at Luxe Beauty Salon.
          </p>

        </div>


        <div className="gallery-grid">

          {galleryImages.map((item, index) => (

            <div
              className={`gallery-item gallery-item-${(index % 6) + 1}`}
              key={item.image}
              onClick={() => setSelectedImage(item)}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="gallery-overlay">

                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>

                <ArrowRight size={20} />

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="gallery-cta">

        <div>

          <div className="section-label">
            LIKE WHAT YOU SEE?
          </div>

          <h2>
            Your next look
            <br />
            could be <em>here.</em>
          </h2>

          <a href="/booking" className="btn-primary">
            Book Your Appointment
          </a>

        </div>

      </section>


      {/* IMAGE MODAL */}
      {selectedImage && (

        <div
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={25} />
          </button>

          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-modal-info">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Gallery;