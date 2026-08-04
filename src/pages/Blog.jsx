import { blogs, mediumProfile } from '../data/blog.js';
import { profile } from '../data/site.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Blog() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="orb orb-1" />
        <div className="container">
          <SectionHeading
            label="// Blog"
            title={<>Engineering <span>articles</span></>}
            sub="Practical, production-focused writing on LLMs, RAG, AI agents and building GenAI software that works."
          />

          <Reveal>
            <a
              href={mediumProfile.url}
              target="_blank"
              rel="noreferrer"
              className="medium-profile"
            >
              <span className="medium-avatar">M</span>
              <span className="medium-info">
                <strong>{profile.name}</strong>
                <span className="mono">{mediumProfile.handle}</span>
              </span>
              <span className="medium-stats">
                <span>👏 {mediumProfile.totalClaps} claps</span>
                <span>✍️ {blogs.length} articles</span>
              </span>
              <span className="medium-follow">Follow on Medium →</span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="blog-list">
            {blogs.map((b, i) => (
              <Reveal key={b.slug} delay={Math.min(i, 5) * 50}>
                <a
                  className="blog-row"
                  href={`https://medium.com/${mediumProfile.handle}/${b.slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="blog-row-index mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="blog-row-body">
                    <span className="blog-card-meta">
                      <span className="mono">{b.date}</span>
                      <span>👏 {b.claps}</span>
                      <span className="mono">{b.readingTime}</span>
                    </span>
                    <strong>{b.title}</strong>
                    <span className="blog-row-excerpt">{b.excerpt}</span>
                  </span>
                  <span className="blog-row-arrow">→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
