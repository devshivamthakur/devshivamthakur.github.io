import Reveal from './Reveal.jsx';

export default function SectionHeading({ label, title, sub, align = 'left' }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      {label && <div className="section-label">{label}</div>}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  );
}
