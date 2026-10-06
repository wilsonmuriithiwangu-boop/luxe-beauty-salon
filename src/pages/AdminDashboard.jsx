import { useState } from "react";
import {
  LayoutDashboard,
  ImagePlus,
  Images,
  Trash2,
  LogOut,
  Plus,
  X,
  Scissors,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [showAddForm, setShowAddForm] = useState(false);

  const [gallery, setGallery] = useState([
    {
      id: 1,
      title: "Elegant Braids",
      category: "BRAIDS",
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 2,
      title: "Signature Styling",
      category: "HAIR STYLING",
      image:
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=85",
    },
  ]);

  const [newImage, setNewImage] = useState({
    title: "",
    category: "HAIR STYLING",
    image: "",
  });

  const handleChange = (e) => {
    setNewImage({
      ...newImage,
      [e.target.name]: e.target.value,
    });
  };

  const addImage = (e) => {
    e.preventDefault();

    if (!newImage.title || !newImage.image) {
      return;
    }

    const image = {
      id: Date.now(),
      title: newImage.title,
      category: newImage.category,
      image: newImage.image,
    };

    setGallery([image, ...gallery]);

    setNewImage({
      title: "",
      category: "HAIR STYLING",
      image: "",
    });

    setShowAddForm(false);
  };

  const deleteImage = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this picture?"
    );

    if (!confirmed) {
      return;
    }

    setGallery(gallery.filter((item) => item.id !== id));
  };

  const logout = () => {
    navigate("/admin-login");
  };

  return (
    <div className="admin-page">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">

        <div className="admin-sidebar-brand">

          <div className="admin-brand-icon">
            <Scissors size={22} />
          </div>

          <div>
            <strong>LUXE</strong>
            <span>BEAUTY SALON</span>
          </div>

        </div>


        <nav className="admin-sidebar-nav">

          <div className="admin-nav-item active">
            <LayoutDashboard size={19} />
            Dashboard
          </div>

          <div className="admin-nav-item">
            <Images size={19} />
            Gallery
          </div>

        </nav>


        <button
          className="admin-logout"
          onClick={logout}
        >
          <LogOut size={18} />
          Logout
        </button>

      </aside>


      {/* MAIN CONTENT */}
      <main className="admin-main">

        {/* HEADER */}
        <header className="admin-header">

          <div>

            <div className="section-label">
              OWNER DASHBOARD
            </div>

            <h1>
              Welcome <em>back.</em>
            </h1>

            <p>
              Manage the pictures displayed on your salon website.
            </p>

          </div>


          <button
            className="btn-primary admin-add-button"
            onClick={() => setShowAddForm(true)}
          >
            <Plus size={18} />
            Add Picture
          </button>

        </header>


        {/* STATS */}
        <section className="admin-stats">

          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <Images size={21} />
            </div>

            <div>
              <span>TOTAL PICTURES</span>
              <strong>{gallery.length}</strong>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <ImagePlus size={21} />
            </div>

            <div>
              <span>GALLERY STATUS</span>
              <strong>Active</strong>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <Scissors size={21} />
            </div>

            <div>
              <span>BUSINESS</span>
              <strong>Luxe</strong>
            </div>

          </div>

        </section>


        {/* GALLERY */}
        <section className="admin-gallery-section">

          <div className="admin-section-heading">

            <div>

              <div className="section-label">
                WEBSITE GALLERY
              </div>

              <h2>
                Your <em>hairstyles.</em>
              </h2>

            </div>

            <span>
              {gallery.length} pictures
            </span>

          </div>


          {gallery.length === 0 ? (

            <div className="admin-empty">

              <Images size={45} />

              <h3>
                Your gallery is empty.
              </h3>

              <p>
                Add your first hairstyle picture
                to display it on your website.
              </p>

              <button
                className="btn-primary"
                onClick={() => setShowAddForm(true)}
              >
                <Plus size={17} />
                Add First Picture
              </button>

            </div>

          ) : (

            <div className="admin-gallery-grid">

              {gallery.map((item) => (

                <div
                  className="admin-gallery-card"
                  key={item.id}
                >

                  <div className="admin-gallery-image">

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <button
                      className="admin-delete-button"
                      onClick={() => deleteImage(item.id)}
                      title="Delete picture"
                    >
                      <Trash2 size={17} />
                    </button>

                  </div>


                  <div className="admin-gallery-info">

                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

      </main>


      {/* ADD IMAGE MODAL */}
      {showAddForm && (

        <div
          className="admin-modal-overlay"
          onClick={() => setShowAddForm(false)}
        >

          <div
            className="admin-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="admin-modal-close"
              onClick={() => setShowAddForm(false)}
            >
              <X size={21} />
            </button>


            <div className="section-label">
              ADD TO GALLERY
            </div>

            <h2>
              Add a <em>hairstyle.</em>
            </h2>

            <p>
              Add a picture that you want visitors
              to see on the salon website.
            </p>


            <form onSubmit={addImage}>

              <div className="admin-form-group">

                <label>
                  Picture Title
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Knotless Braids"
                  value={newImage.title}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="admin-form-group">

                <label>
                  Category
                </label>

                <select
                  name="category"
                  value={newImage.category}
                  onChange={handleChange}
                >
                  <option>HAIR STYLING</option>
                  <option>BRAIDS</option>
                  <option>WEAVING</option>
                  <option>NATURAL HAIR</option>
                  <option>HAIR COLOR</option>
                  <option>HAIR TREATMENT</option>
                </select>

              </div>


              <div className="admin-form-group">

                <label>
                  Image URL
                </label>

                <input
                  type="url"
                  name="image"
                  placeholder="https://..."
                  value={newImage.image}
                  onChange={handleChange}
                  required
                />

                <small>
                  We'll replace this with a real picture
                  upload system in the next step.
                </small>

              </div>


              <button
                type="submit"
                className="btn-primary admin-submit-button"
              >
                <ImagePlus size={18} />
                Add Picture
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default AdminDashboard;