import { Link } from 'react-router-dom';
import { profile } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="nav-logo">
            <span className="nav-logo-mark">⚡</span>
            <span>{profile.brand}</span>
          </div>
          <p>
            Intelligent software — AI products, RAG pipelines &amp; scalable apps built by{' '}
            {profile.name}.
          </p>
          <div className="footer-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href={profile.medium} target="_blank" rel="noreferrer" aria-label="Medium">M</a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/products">Products</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <Link to="/products/careerai">CareerAI</Link>
          <Link to="/products/docgpt">DocGPT</Link>
          <Link to="/products/insightstream">InsightStream</Link>
          <Link to="/products/daily-task-tracker">Daily Task Tracker</Link>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.medium} target="_blank" rel="noreferrer">Medium</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React ⚡</span>
        <span className="footer-mono">GenAI · FastAPI · React Native</span>
      </div>
    </footer>
  );
}
