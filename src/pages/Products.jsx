import { useState } from 'react';
import { products, useCases } from '../data/site.js';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Products() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <div className="page">
      <section className="page-hero">
        <div className="orb orb-1" />
        <div className="container">
          <SectionHeading
            label="// Products"
            title={<>Our <span>SaaS products</span></>}
            sub="Every product is built for a real business use case — with live demos, open-source code and production infrastructure."
          />
          <Reveal>
            <div className="filter-row">
              <button
                className={`filter-chip ${filter === 'all' ? 'filter-chip--active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All ({products.length})
              </button>
              {useCases.map((u) => {
                const count = products.filter((p) => p.category === u.id).length;
                if (count === 0) return null;
                return (
                  <button
                    key={u.id}
                    className={`filter-chip ${filter === u.id ? 'filter-chip--active' : ''}`}
                    onClick={() => setFilter(u.id)}
                  >
                    {u.icon} {u.title} ({count})
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="cards-grid">
            {filtered.map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard project={p} to={`/products/${p.slug}`} />
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="empty-state">No products in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
