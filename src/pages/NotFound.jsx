import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page">
      <section className="notfound">
        <div className="orb orb-1" />
        <div className="container">
          <h1 className="notfound-code mono">404</h1>
          <h2 className="section-title">Page not found</h2>
          <p className="section-sub">
            The page you're looking for doesn't exist — but our products do.
          </p>
          <Link to="/" className="btn btn--primary btn--lg">Back to home</Link>
        </div>
      </section>
    </div>
  );
}
