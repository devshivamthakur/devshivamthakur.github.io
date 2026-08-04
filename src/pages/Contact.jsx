import { profile } from '../data/site.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Contact() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="orb orb-3" />
        <div className="container">
          <SectionHeading
            label="// Contact"
            title={<>Let's build <span>something</span></>}
            sub="Available for freelance, full-time roles and product collaborations. Tell me about your project — I usually reply within 24 hours."
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <div className="contact-info">
                <a href={`mailto:${profile.email}`} className="contact-item">
                  <span className="contact-icon">✉</span>
                  <span>
                    <small>Email</small>
                    {profile.email}
                  </span>
                </a>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>
                    <small>Phone</small>
                    {profile.phone}
                  </span>
                </a>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>
                    <small>Location</small>
                    {profile.location}
                  </span>
                </div>

                <div className="social-row">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-btn">in LinkedIn</a>
                  <a href={profile.medium} target="_blank" rel="noreferrer" className="social-btn">M Medium</a>
                  <a href={profile.instagram} target="_blank" rel="noreferrer" className="social-btn">◎ Instagram</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                className="contact-form"
                action={`mailto:${profile.email}`}
                method="post"
                encType="text/plain"
              >
                <div className="form-row">
                  <label>
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Your name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="you@company.com" required />
                  </label>
                </div>
                <label>
                  <span>Subject</span>
                  <input type="text" name="subject" placeholder="Project inquiry" required />
                </label>
                <label>
                  <span>Message</span>
                  <textarea name="body" rows="6" placeholder="Tell me about your project..." required />
                </label>
                <button type="submit" className="btn btn--primary btn--lg">Send message →</button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
