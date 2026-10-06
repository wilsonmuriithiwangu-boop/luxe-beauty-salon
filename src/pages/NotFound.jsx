import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

function NotFound() {
  return (
    <div className="not-found">

      <div className="not-found-number">
        404
      </div>

      <div className="section-label">
        PAGE NOT FOUND
      </div>

      <h1>
        This page seems to have
        <br />
        <em>gone somewhere else.</em>
      </h1>

      <p>
        The page you're looking for doesn't exist or may
        have been moved.
      </p>

      <div className="not-found-actions">

        <Link
          to="/"
          className="btn-primary"
        >
          <Home size={17} />
          Back Home
        </Link>

        <button
          className="not-found-back"
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={16} />
          Go Back
        </button>

      </div>

    </div>
  );
}

export default NotFound;