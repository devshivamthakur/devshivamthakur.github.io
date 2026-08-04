// Medium blog rail — mirrored from https://medium.com/@dev_shivam_thakur

export const blogs = [
  {
    slug: 'why-evaluation-matters-in-llm-applications-a-developers-guide-d27fee05ef05',
    title: 'Why Evaluation Matters in LLM Applications: A Developer’s Guide',
    excerpt:
      'Building with Large Language Models feels like magic — until it doesn’t. You fine-tune a model, deploy it to production, and suddenly users…',
    date: 'Aug 2026',
    claps: 111,
    readingTime: '9 min'
  },
  {
    slug: 'multi-agent-systems-architecting-intelligence-at-scale-2f2da36a8987',
    title: 'Multi-Agent Systems: Architecting Intelligence at Scale',
    excerpt:
      'In today’s rapidly evolving landscape of artificial intelligence, single-agent systems are increasingly proving insufficient for complex…',
    date: 'Jul 2026',
    claps: 60,
    readingTime: '11 min'
  },
  {
    slug: 'how-to-stop-ai-from-making-up-answers-12-proven-strategies-to-reduce-hallucination-in-genai-9f2188aa14c4',
    title: 'How to Stop AI from Making Up Answers: 12 Proven Strategies to Reduce Hallucination in GenAI',
    excerpt:
      'Hallucination is the #1 trust killer in production GenAI. Here are 12 proven strategies to ground your models and stop AI from making things up.',
    date: 'Jul 2026',
    claps: 120,
    readingTime: '12 min'
  },
  {
    slug: 'cosine-similarity-the-secret-sauce-behind-vector-database-search-528c576c3ff4',
    title: 'Cosine Similarity: The Secret Sauce Behind Vector Database Search',
    excerpt:
      'Ever wondered how your AI chatbot finds the right document from thousands when you ask it a question? Or how a semantic search engine…',
    date: 'Jul 2026',
    claps: 59,
    readingTime: '7 min'
  },
  {
    slug: 'why-vector-databases-matter-for-rag-moving-beyond-traditional-sql-09b904a1d8d0',
    title: 'Why Vector Databases Matter for RAG: Moving Beyond Traditional SQL',
    excerpt:
      'You’re building a RAG system. Your boss suggests: “Why don’t we just use PostgreSQL? We already have it…”',
    date: 'Jul 2026',
    claps: 160,
    readingTime: '8 min'
  },
  {
    slug: 'agents-and-sub-agents-breaking-down-how-ai-systems-make-decisions-7a3467fe7849',
    title: 'Agents and Sub-Agents: Breaking Down How AI Systems Make Decisions',
    excerpt:
      'You’ve probably heard the term “AI agent” thrown around lately, especially with all the buzz around ChatGPT, Claude, and other AI systems…',
    date: 'Jul 2026',
    claps: 70,
    readingTime: '10 min'
  },
  {
    slug: 'langgraph-building-intelligent-ai-workflows-that-actually-make-sense-b4037888da2c',
    title: 'LangGraph: Building Intelligent AI Workflows That Actually Make Sense',
    excerpt:
      'Remember when chatbots could only do one thing at a time? You’d ask them a question, they’d search the internet, and then… nothing. No…',
    date: 'Jul 2026',
    claps: 142,
    readingTime: '9 min'
  },
  {
    slug: 'understanding-mcp-model-context-protocol-the-future-of-ai-agent-integration-b4f9a1b0cf49',
    title: 'Understanding MCP (Model Context Protocol): The Future of AI Agent Integration',
    excerpt:
      'The Model Context Protocol is quietly becoming the universal language for AI agents. Here’s what it is and why it matters.',
    date: 'Jun 2026',
    claps: 125,
    readingTime: '8 min'
  },
  {
    slug: 'building-production-grade-multimodal-rag-systems-from-pdfs-to-semantic-intelligence-9e32d5149c39',
    title: 'Building Production-Grade Multimodal RAG Systems: From PDFs to Semantic Intelligence',
    excerpt:
      'RAG has become the backbone of modern AI applications. But traditional RAG systems treat all content the same…',
    date: 'Jun 2026',
    claps: 161,
    readingTime: '13 min'
  },
  {
    slug: 'careerai-building-an-ai-powered-job-application-assistant-665390298d9d',
    title: 'CareerAI: Building an AI-Powered Job Application Assistant',
    excerpt:
      'I shipped CareerAI — an open-source job application assistant that automates the painful parts of job hunting. Here’s how I built it…',
    date: 'Jun 2026',
    claps: 100,
    readingTime: '10 min'
  }
];

export const mediumProfile = {
  url: 'https://medium.com/@dev_shivam_thakur',
  handle: '@dev_shivam_thakur',
  followers: 5,
  totalClaps: blogs.reduce((sum, b) => sum + b.claps, 0)
};
