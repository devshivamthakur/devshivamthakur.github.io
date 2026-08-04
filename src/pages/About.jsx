import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { experience, profile, skills } from '../data/site.js';

export default function About() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      if (contactRef.current && scrollPosition >= contactRef.current.offsetTop - 150) {
        setActiveSection('contact');
      } else if (workRef.current && scrollPosition >= workRef.current.offsetTop - 150) {
        setActiveSection('work');
      } else {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter or select 5 premium projects
  const featuredWorks = [
    {
      num: '01',
      name: 'CareerAI',
      category: 'AI / LLM Agent',
      desc: 'ATS-optimized resume generator, tailored cover letters, and a tool-calling chat assistant backed by a 4-node LangGraph workflow and FastAPI.',
      tools: 'LangGraph, FastAPI, LangChain, React, Redis, PostgreSQL',
      link: 'https://github.com/devshivamthakur/career-ai',
    },
    {
      num: '02',
      name: 'MyMoney Tracking RAG',
      category: 'FinTech / GenAI',
      desc: 'Offline-first budgeting mobile app with real-time sync and an AI finance assistant retrieving live transactions using RAG and Server-Sent Events.',
      tools: 'React Native, Firebase, FastAPI, LangChain, RAG, SSE',
      link: 'https://github.com/devshivamthakur/mymoneyTracking-Rag',
    },
    {
      num: '03',
      name: 'DocGPT',
      category: 'RAG / LLM',
      desc: 'Interactive document chat app utilizing modular RAG pipeline and FastAPI to stream grounded answers from uploaded files with KaTeX math formatting.',
      tools: 'Python, FastAPI, TypeScript, React, RAG, KaTeX',
      link: 'https://github.com/devshivamthakur/docgpt',
    },
    {
      num: '04',
      name: 'Vodafone Idea (Vi) App Chatbot',
      category: 'Enterprise / Telecom',
      desc: 'Engineered a highly scalable, real-time RAG-based customer support chatbot system handling millions of active telecom subscribers.',
      tools: 'FastAPI, Azure AI Search, LangChain, LangSmith, React Native',
      link: 'https://play.google.com/store/apps/details?id=com.mventus.selfcare.activity',
    },
    {
      num: '05',
      name: 'InsightStream',
      category: 'AI / News Aggregator',
      desc: 'Automated news ingestion system analyzing RSS and YouTube sources with LLM-powered summarization, JWT authentication, and automated email digests.',
      tools: 'FastAPI, Python, PostgreSQL, OpenAI, Docker, React, APScheduler',
      link: 'https://github.com/devshivamthakur/ai-news-aggregater',
    },
  ];

  return (
    <div className="minimal-portfolio">
      {/* BESPOKE MINIMALIST HEADER */}
      <header className="min-header">
        <div className="min-header-left">
          <Link to="/" className="min-logo">
            {profile.shortName}
          </Link>
          <div className="min-header-ticker-container">
            <span className="min-header-ticker">
              {profile.name} • {profile.title} • {profile.name} • {profile.title} •
            </span>
          </div>
        </div>

        <nav className="min-nav">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className={`min-nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(workRef)}
            className={`min-nav-link ${activeSection === 'work' ? 'active' : ''}`}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className={`min-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
          <Link to="/" className="min-nav-link">
            Main Site ↗
          </Link>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="min-nav-resume">
            Resume
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="min-hero-section">
        <div className="min-hero-sub">Hello! I'm</div>
        <h1 className="min-hero-name">{profile.name}</h1>
        <h2 className="min-hero-title">
          An <span>AI ENGINEER</span> &amp; <span>FULL-STACK DEVELOPER</span>
        </h2>
      </section>

      {/* ABOUT ME SECTION */}
      <section ref={aboutRef} className="min-section">
        <span className="min-section-label"><span>[ 01 ]</span> About Me</span>
        <div className="min-about-grid">
          <div className="min-about-statement">
            I build <span>intelligent software solutions</span>—combining advanced Generative AI architectures with high-performance web and mobile engineering.
          </div>
          <div className="min-about-details">
            <p>
              I am a GenAI Engineer &amp; Full-Stack Developer from Pune, MH, India. I specialize in building next-generation AI agents, conversational interfaces, and RAG (Retrieval-Augmented Generation) pipelines designed to bring actual utility to production-level systems.
            </p>
            <p>
              With rich hands-on experience designing and operating systems at a 10M+ user scale, my core competencies lie in creating fast backends with Python &amp; FastAPI, designing tool-calling agents with LangGraph/LangChain, and building highly responsive UI/UX using React and React Native.
            </p>
            <p>
              I am deeply passionate about pushing technical limits, automating complex workflows, and deploying robust architecture. Code is my poetry, and AI is my canvas.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I DO SECTION */}
      <section className="min-section">
        <span className="min-section-label"><span>[ 02 ]</span> What I Do</span>
        <h2 className="min-section-title">My Expertise &amp; Services</h2>
        <div className="min-services-grid">
          {/* AI Developer Card */}
          <div className="min-service-card">
            <div className="min-service-icon">🤖</div>
            <h3 className="min-service-title">AI &amp; GenAI Engineer</h3>
            <span className="min-service-subtitle">Intelligent Systems &amp; Agentic Solutions</span>
            <p className="min-service-desc">
              Developing autonomous AI agents, multi-node LangGraph state machines, conversational bots, and highly optimized RAG pipelines. Expert in prompt orchestration, LLM API evaluations, and vector database retrieval.
            </p>
            <div className="min-service-skills-title">Core Toolbox</div>
            <div className="min-service-skills">
              {skills['GenAI & ML']?.map((skill) => (
                <span key={skill} className="min-service-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER & EXPERIENCE SECTION */}
      <section className="min-section">
        <span className="min-section-label"><span>[ 03 ]</span> Experience</span>
        <h2 className="min-section-title">My Career Journey</h2>
        <div className="min-timeline">
          {/* NOW / Self Development */}
          <div className="min-timeline-item">
            <div className="min-timeline-dot" />
            <div className="min-timeline-year">NOW</div>
            <h3 className="min-timeline-title">Learning Something New</h3>
            <div className="min-timeline-company">Self-Development &amp; Emerging Tech</div>
            <div className="min-timeline-desc">
              Continuously exploring advanced prompt engineering, researching autonomous agent frameworks, testing new LLM models, and exploring ways to build lightning-fast RAG systems.
            </div>
          </div>

          {/* Jobs mapping */}
          {experience.map((job, idx) => (
            <div key={idx} className="min-timeline-item">
              <div className="min-timeline-dot" />
              <div className="min-timeline-year">{job.period.split('—')[0].trim()}</div>
              <h3 className="min-timeline-title">{job.role.split('—')[0].trim()}</h3>
              <div className="min-timeline-company">
                {job.company} <span>• {job.location}</span>
              </div>
              <div className="min-timeline-desc">
                <ul>
                  {job.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MY WORK SECTION */}
      <section ref={workRef} className="min-section">
        <span className="min-section-label"><span>[ 04 ]</span> My Work</span>
        <h2 className="min-section-title">Featured Creations</h2>
        <div className="min-work-list">
          {featuredWorks.map((work) => (
            <div key={work.num} className="min-work-row">
              <div className="min-work-num">{work.num}</div>
              <div className="min-work-info">
                <h3>{work.name}</h3>
                <span className="min-work-tag">{work.category}</span>
              </div>
              <div className="min-work-details-col">
                <p className="min-work-desc">{work.desc}</p>
                <div>
                  <div className="min-work-tools-title">Tools &amp; Features</div>
                  <div className="min-work-tools">
                    {work.tools.split(',').map((t, i) => (
                      <span key={i} className="min-work-tools-tag">
                        #{t.trim()}{i < work.tools.split(',').length - 1 ? ' • ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="min-work-links">
                  {work.link && (
                    <a href={work.link} target="_blank" rel="noreferrer" className="min-work-btn">
                      Explore Work ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="min-see-more-row">
          <h3 className="min-see-more-title">Want to see more of my products?</h3>
          <Link to="/products" className="min-see-more-link">
            Explore All Products →
          </Link>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="min-section">
        <span className="min-section-label"><span>[ 05 ]</span> Tech Stack</span>
        <h2 className="min-section-title">Tools I Command</h2>
        <div className="min-tech-grid">
          {Object.values(skills)
            .flat()
            .map((tech) => (
              <span key={tech} className="min-tech-tag">
                {tech}
              </span>
            ))}
        </div>
      </section>

      {/* CONTACT / FOOTER SECTION */}
      <footer ref={contactRef} className="min-footer">
        <div className="min-footer-content">
          <div className="min-footer-left">
            <h2>Contact</h2>
            <div className="min-footer-name">{profile.name}</div>
            <a href={`mailto:${profile.email}`} className="min-footer-email">
              {profile.email}
            </a>
            <div className="min-footer-location">📍 {profile.location}</div>
          </div>
          <div className="min-footer-right">
            <div className="min-footer-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" className="min-social-row">
                Github <span>↗</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="min-social-row">
                Linkedin <span>↗</span>
              </a>
              <a href={profile.medium} target="_blank" rel="noreferrer" className="min-social-row">
                Medium <span>↗</span>
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" className="min-social-row">
                Instagram <span>↗</span>
              </a>
            </div>
          </div>
        </div>
        <div className="min-footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Shivam Kumar Thakur. All Rights Reserved.
          </div>
          <div>
            Designed &amp; Developed by <span>Shivam Kumar Thakur</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
