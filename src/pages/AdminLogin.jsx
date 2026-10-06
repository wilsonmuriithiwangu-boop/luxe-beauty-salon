import { useState } from "react";
import { Lock, Mail, ArrowRight, Scissors } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary login for the demo.
    // We will replace this with real authentication
    // when we connect the dashboard to the backend.

    if (
      form.email === "njeristella28@gmail.com" &&
  form.password === "0789726060"
    ) {
      navigate("/admin");
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-brand">
        <div className="admin-brand-icon">
          <Scissors size={25} />
        </div>

        <span>LUXE</span>
        <small>BEAUTY SALON</small>
      </div>


      <div className="admin-login-card">

        <div className="admin-login-header">

          <div className="section-label">
            OWNER ACCESS
          </div>

          <h1>
            Welcome <em>back.</em>
          </h1>

          <p>
            Sign in to manage your salon gallery
            and website content.
          </p>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="admin-form-group">

            <label>
              <Mail size={16} />
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="admin-form-group">

            <label>
              <Lock size={16} />
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />

          </div>


          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}


          <button
            type="submit"
            className="btn-primary admin-login-button"
          >
            Sign In
            <ArrowRight size={17} />
          </button>

        </form>


        <div className="admin-login-footer">
          <span>LUXE BEAUTY SALON</span>
          <small>OWNER DASHBOARD</small>
        </div>

      </div>

    </div>
  );
}

export default AdminLogin;