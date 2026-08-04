import { Link, useParams } from 'react-router-dom';
import { products, portfolioProjects, useCases } from '../data/site.js';
import Reveal from '../components/Reveal.jsx';
import NotFound from './NotFound.jsx';

const allProjects = [...products, ...portfolioProjects];

export default function ProductDetail() {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return <NotFound />;

  const isProduct = products.some((p) => p.slug === slug);
  const useCase = useCases.find((u) => u.id === project.category);
  const related = products
    .filter((p) => p.category === project.category && p.slug !== slug)
    .slice(0, 2);

  return (
    <div className="page">
      <section className="detail-hero" style={{ '--card-grad': project.gradient }}>
        <div className="orb orb-2" />
        <div className="container">
          <Reveal>
            <nav className="breadcrumb">
              <Link to={isProduct ? '/products' : '/portfolio'}>
                {isProduct ? 'Products' : 'Portfolio'}
              </Link>
              <span>/</span>
              <span>{project.name}</span>
            </nav>
          </Reveal>

          <div className="detail-grid">
            <div>
              <Reveal>
                <div className="detail-top">
                  <div className="card-icon card-icon--lg" aria-hidden="true">
                    {project.icon}
                  </div>
                  {project.badge && <span className="card-badge">{project.badge}</span>}
                  {project.status && project.badge === undefined && (
                    <span className="card-badge card-badge--soft">{project.status}</span>
                  )}
                </div>
                <h1 className="detail-title">{project.name}</h1>
                <p className="detail-tagline">{project.tagline}</p>
                <p className="detail-desc">{project.description}</p>
              </Reveal>

              <Reveal delay={100}>
                <div className="detail-actions">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" className="btn btn--primary btn--lg">
                      ▶ Launch Platform
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn--primary btn--lg">
                      ▶ Watch Demo
                    </a>
                  )}
                  {project.links.appStore && (
                    <a href={project.links.appStore} target="_blank" rel="noreferrer" className="btn btn--primary btn--lg">
                      ▶ Install App
                    </a>
                  )}
                  {project.links.playStore && (
                    <a href={project.links.playStore} target="_blank" rel="noreferrer" className="btn btn--primary btn--lg">
                      ▶ Play Store
                    </a>
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <aside className="detail-aside">
                <div className="aside-item">
                  <span className="aside-label">Use Case</span>
                  <span className="aside-value">{project.useCase}</span>
                </div>
                <div className="aside-item">
                  <span className="aside-label">Category</span>
                  <span className="aside-value">
                    {useCase ? `${useCase.icon} ${useCase.title}` : project.categoryLabel || '—'}
                  </span>
                </div>
                <div className="aside-item">
                  <span className="aside-label">Status</span>
                  <span className="aside-value">{project.status || '—'}</span>
                </div>
                <div className="aside-item">
                  <span className="aside-label">Year</span>
                  <span className="aside-value">{project.year || '—'}</span>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-body">
          <Reveal>
            <h2 className="detail-h2">Overview</h2>
            <p className="detail-long">{project.longDescription || project.description}</p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="detail-h2">Key Features</h2>
            <ul className="feature-list">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="detail-h2">Tech Stack</h2>
            <div className="card-stack detail-stack">
              {project.stack.map((s) => (
                <span key={s} className="stack-tag">{s}</span>
              ))}
            </div>
          </Reveal>

          {project.links.images && project.links.images.length > 0 && (
            <Reveal delay={160}>
              <h2 className="detail-h2">Screenshots</h2>
              <div className="screenshot-grid">
                {project.links.images.map((src) => (
                  <img key={src} src={src} alt={`${project.name} screenshot`} loading="lazy" />
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <Reveal>
              <h2 className="detail-h2">Related Products</h2>
            </Reveal>
            <div className="cards-grid">
              {related.map((p) => (
                <Reveal key={p.slug}>
                  <div className="related-card">
                    <Link to={`/products/${p.slug}`} className="related-link">
                      <span className="related-icon">{p.icon}</span>
                      <span>
                        <strong>{p.name}</strong>
                        <small>{p.tagline}</small>
                      </span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
