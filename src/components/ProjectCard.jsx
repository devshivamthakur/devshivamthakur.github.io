import { Link } from 'react-router-dom';

function linkButtons(links) {
  const out = [];
  if (links.live) out.push({ href: links.live, label: 'Launch Platform', kind: 'live' });
  if (links.demo) out.push({ href: links.demo, label: 'Demo', kind: 'live' });
  if (links.appStore) out.push({ href: links.appStore, label: 'Install App', kind: 'live' });
  if (links.playStore) out.push({ href: links.playStore, label: 'Play Store', kind: 'live' });
  if (links.github) out.push({ href: links.github, label: 'GitHub', kind: 'github' });
  return out;
}

export default function ProjectCard({ project, to, showGitHub = false, showSkills = false }) {
  let buttons = linkButtons(project.links);
  if (!showGitHub) {
    buttons = buttons.filter((b) => b.kind !== 'github');
  }

  return (
    <article className="card" style={{ '--card-grad': project.gradient }}>
      <div className="card-glow" />
      <div className="card-top">
        <div className="card-icon" aria-hidden="true">{project.icon}</div>
        {project.badge && <span className="card-badge">{project.badge}</span>}
        {project.status && project.badge === undefined && (
          <span className="card-badge card-badge--soft">{project.status}</span>
        )}
      </div>

      <h3 className="card-title">
        {to ? <Link to={to}>{project.name}</Link> : project.name}
      </h3>
      <p className="card-tagline">{project.tagline}</p>
      <p className="card-desc">{project.description}</p>

      {showSkills && project.stack && (
        <div className="card-stack">
          {project.stack.slice(0, 5).map((s) => (
            <span key={s} className="stack-tag">{s}</span>
          ))}
          {project.stack.length > 5 && (
            <span className="stack-tag stack-tag--more">+{project.stack.length - 5}</span>
          )}
        </div>
      )}

      <div className="card-links">
        {to && (
          <Link to={to} className="card-link card-link--primary">
            Explore Architecture →
          </Link>
        )}
        {buttons.map((b) =>
          b.kind === 'live' ? (
            <a key={b.label} href={b.href} target="_blank" rel="noreferrer" className="card-link card-link--live">
              ▶ {b.label}
            </a>
          ) : (
            <a key={b.label} href={b.href} target="_blank" rel="noreferrer" className="card-link card-link--ghost">
              ⌥ {b.label}
            </a>
          )
        )}
      </div>
    </article>
  );
}
