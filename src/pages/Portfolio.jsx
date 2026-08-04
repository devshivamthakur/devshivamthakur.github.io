import { portfolioProjects, products, skills } from '../data/site.js';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const types = ['All', 'Enterprise', 'Open Source', 'Mobile App', 'Full Stack', 'Web App'];

export default function Portfolio() {
  const all = [...products, ...portfolioProjects];

  return (
    <div className="page">
      <section className="page-hero">
        <div className="orb orb-3" />
        <div className="container">
          <SectionHeading
            label="// Portfolio"
            title={<>A track record of <span>shipping</span></>}
            sub="Products, enterprise platforms and open-source projects — every one of them with a link to try it live."
          />
          <Reveal>
            <div className="portfolio-types">
              {types.map((t) => (
                <span key={t} className="type-chip">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="cards-grid">
            {all.map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard 
                  project={p} 
                  to={p.category ? `/products/${p.slug}` : undefined} 
                  showGitHub 
                  showSkills 
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS — GitHub links & skills live only on this page */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="// Skills"
            title={<>Skills & <span>capabilities</span></>}
            sub="The technologies and expertise behind every project in this portfolio."
          />
          <div className="skills-grid">
            {Object.entries(skills).map(([group, tags], i) => (
              <Reveal key={group} delay={i * 60}>
                <div className="skills-box">
                  <div className="skill-group-label">{group}</div>
                  <div className="skill-tags">
                    {tags.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
