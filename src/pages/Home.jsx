import { Link } from 'react-router-dom';
import { profile, products, portfolioProjects, useCases } from '../data/site.js';
import { blogs } from '../data/blog.js';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const processSteps = [
  { icon: '🔍', title: 'Discover', desc: 'I map technical goals, user needs and data architecture to define exactly what to build and where AI adds real value.' },
  { icon: '🎨', title: 'Design', desc: 'System architecture, API interfaces and AI systems — fully documented and aligned before writing code.' },
  { icon: '🛠️', title: 'Build', desc: 'Iterative implementation with production-grade code: FastAPI backends, RAG pipelines and responsive frontends.' },
  { icon: '🚀', title: 'Deploy', desc: 'CI/CD, Dockerization, cloud infrastructure provisioning, and robust monitoring — shipped to real servers.' },
  { icon: '📊', title: 'Optimize', desc: 'LLM evaluation (using LangSmith), performance tuning, analytics, and scaling systems to support users.' }
];

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="hero-inner">
          <Reveal delay={80}>
            <h1 className="hero-title">
              I build <span>intelligent</span> software
              <br />
              that ships <span>real</span> value.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-sub">
              I am {profile.name}, a Generative AI &amp; Full-Stack Engineer specializing in AI-powered SaaS,
              RAG pipelines, and enterprise applications used by over{' '}
              <strong>10M+ users</strong>. Explore my products, portfolio and engineering
              blog.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-cta">
              <Link to="/products" className="btn btn--primary btn--lg">
                Explore Products →
              </Link>
              <Link to="/portfolio" className="btn btn--ghost btn--lg">
                View Portfolio
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="btn btn--ghost btn--lg"
              >
                Let's Connect
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero-stats">
              {profile.stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-num">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPANYS WORKED AT */}
      <section className="trust-strip">
        <Reveal>
          <p className="trust-label">Engineered production systems at</p>
          <div className="trust-logos">
            <span>Vodafone Idea</span>
            <span>iProgrammer Solutions</span>
            <span>Mobiloitte</span>
            <span>Wyreflow</span>
            <span>Indus App Store</span>
          </div>
        </Reveal>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="// Core Expertise"
            title={<>Applications &amp; <span>Engineering Solutions</span></>}
            sub="AI assistants, productivity tools, fintech, media intelligence and mobile apps — production software with real users."
          />
          <div className="usecase-grid">
            {useCases.map((u, i) => (
              <Reveal key={u.id} delay={i * 60}>
                <div className="usecase-card">
                  <div className="usecase-icon">{u.icon}</div>
                  <h3>{u.title}</h3>
                  <p>{u.desc}</p>
                  <span className="usecase-example">{u.example}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            label="// Engineering Workflow"
            title={<>My Software <span>Methodology</span></>}
            sub="How I design, build, and deploy high-performance applications — focused on quality and scale."
          />
          <div className="process-grid">
            {processSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="process-step">
                  <div className="process-num mono">0{i + 1}</div>
                  <div className="process-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            label="// Our products"
            title={<>Ship-ready <span>SaaS products</span></>}
            sub="Polished, business-facing applications — each with a clear use case, live demo and open-source code."
          />
          <div className="cards-grid">
            {featured.map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard project={p} to={`/products/${p.slug}`} />
              </Reveal>
            ))}
          </div>
          <Reveal className="center-cta">
            <Link to="/products" className="btn btn--ghost">
              See all products →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="// Portfolio"
            title={<>Enterprise & <span>open-source work</span></>}
            sub="From a telecom super-app serving 10M+ users to open-source RAG tooling loved by the community."
          />
          <div className="cards-grid">
            {portfolioProjects.slice(0, 3).map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="center-cta">
            <Link to="/portfolio" className="btn btn--ghost">
              View full portfolio →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* BLOG RAIL */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            label="// From the blog"
            title={<>Latest <span>engineering</span> articles</>}
            sub="Deep dives on LLMs, RAG, agents and production GenAI — published on Medium."
          />
          
          <Reveal delay={100}>
            <div className="medium-preview-layout">
              {/* Featured Article Preview */}
              <div className="medium-featured-card">
                <div className="medium-card-header">
                  <div className="medium-author-avatar">S</div>
                  <div className="medium-author-meta">
                    <span className="author-name">{profile.name}</span>
                    <span className="medium-pub">Published on Medium · {blogs[0].date}</span>
                  </div>
                  <div className="medium-logo-badge">M</div>
                </div>
                <div className="medium-card-content">
                  <div className="featured-gradient-art" />
                  <h3>{blogs[0].title}</h3>
                  <p>{blogs[0].excerpt}</p>
                </div>
                <div className="medium-card-footer">
                  <div className="blog-meta-stats">
                    <span className="mono">⏱️ {blogs[0].readingTime} read</span>
                    <span className="claps">👏 {blogs[0].claps} claps</span>
                  </div>
                  <a
                    href={`https://medium.com/${profile.medium.replace('https://medium.com/', '')}/${blogs[0].slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--sm btn--primary medium-read-btn"
                  >
                    Read Article ↗
                  </a>
                </div>
              </div>

              {/* List of Other Articles */}
              <div className="medium-side-list">
                {blogs.slice(1, 4).map((b) => (
                  <a
                    key={b.slug}
                    className="medium-side-item"
                    href={`https://medium.com/${profile.medium.replace('https://medium.com/', '')}/${b.slug}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="side-item-meta">
                      <span className="mono">{b.date}</span>
                      <span>👏 {b.claps}</span>
                    </div>
                    <h4>{b.title}</h4>
                    <p>{b.excerpt}</p>
                    <span className="side-item-footer">
                      {b.readingTime} read <span>→</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="center-cta">
            <a href={profile.medium} target="_blank" rel="noreferrer" className="btn btn--ghost">
              Read all articles on Medium →
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <Reveal>
            <h2>Have an idea? Let's ship it together.</h2>
            <p>
              Available for freelance, full-time and product collaborations. Let's talk about
              your next AI product.
            </p>
            <div className="hero-cta cta-buttons">
              <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg">
                ⚡ Start a conversation
              </a>
              <Link to="/contact" className="btn btn--ghost btn--lg">
                Contact page
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
