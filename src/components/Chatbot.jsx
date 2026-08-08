import { useState, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';

const API_URL = 'https://personal-portfolio-agent-z0t0.onrender.com/api/v1/chat/stream';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Shivam's portfolio assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortControllerRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (e) => {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Placeholder assistant message for streaming
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

    try {
      abortControllerRef.current = new AbortController();

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
        },
        body: JSON.stringify({
          message: trimmed,
          session_id: sessionId,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine.startsWith('data:')) continue;

          const jsonStr = trimmedLine.slice(5).trim();
          if (!jsonStr) continue;

          try {
            const data = JSON.parse(jsonStr);
            if (data.session_id && !sessionId) {
              setSessionId(data.session_id);
            }
            if (data.content) {
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                if (last?.role === 'assistant') {
                  updated[updated.length - 1] = {
                    ...last,
                    content: last.content + data.content,
                  };
                }
                return updated;
              });
            }
            if (data.finish_reason === 'stop') {
              break;
            }
          } catch {
            // skip malformed JSON
          }
        }
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last?.role === 'assistant') {
            updated[updated.length - 1] = {
              ...last,
              content: last.content || 'Sorry, something went wrong. Please try again.',
            };
          }
          return updated;
        });
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm Shivam's portfolio assistant. Ask me anything about his skills, projects, or experience!",
      },
    ]);
    setSessionId(null);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'chatbot-toggle--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'chatbot-window--open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">SKT</div>
            <div>
              <div className="chatbot-title">Portfolio AI</div>
              <div className="chatbot-status">
                <span className="chatbot-status-dot" /> Online
              </div>
            </div>
          </div>
          <button className="chatbot-clear" onClick={clearChat} title="Clear chat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chatbot-message chatbot-message--${msg.role}`}>
              {msg.role === 'assistant' && (
                <div className="chatbot-message-avatar">SKT</div>
              )}
              <div className="chatbot-message-bubble">
                {msg.role === 'assistant' ? (
                  <div className="chatbot-markdown">
                    {msg.content ? (
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    ) : isLoading && idx === messages.length - 1 ? (
                      <span className="chatbot-typing">
                        <span /><span /><span />
                      </span>
                    ) : null}
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-area" onSubmit={sendMessage}>
          <input
            ref={inputRef}
            type="text"
            className="chatbot-input"
            placeholder="Ask about Shivam's work..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="chatbot-send"
            disabled={isLoading || !input.trim()}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
