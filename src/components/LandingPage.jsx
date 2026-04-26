// filepath: src/components/LandingPage.jsx
import { useState, useEffect } from "react";
import "./LandingPage.css";

function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  return (
    <div className="landing-page" onMouseMove={handleMouseMove}>
      {/* Animated Background */}
      <div className="bg-gradient">
        <div
          className="blob blob-1"
          style={{ "--x": mousePosition.x, "--y": mousePosition.y }}
        ></div>
        <div
          className="blob blob-2"
          style={{ "--x": mousePosition.x, "--y": mousePosition.y }}
        ></div>
        <div
          className="blob blob-3"
          style={{ "--x": mousePosition.x, "--y": mousePosition.y }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Anantrix Technology</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <a href="#contact" className="btn-nav">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">🍽️ #1 SaaS for Restaurants & Cafes</span>
          <h1 className="hero-title">
            Smart <span className="gradient-text">Restaurant Management</span>{" "}
            Made Simple
          </h1>
          <p className="hero-subtitle">
            Anantrix Technology provides all-in-one POS, inventory, and customer
            management software designed specifically for restaurants and cafes.
            Streamline operations and grow your business.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              <span>Start Free Trial</span>
              <span className="btn-icon">→</span>
            </button>
            <button className="btn-secondary">
              <span>Watch Demo</span>
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Restaurants</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Orders Daily</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">🧾</div>
            <span>POS System</span>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">📦</div>
            <span>Inventory</span>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">📊</div>
            <span>Analytics</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">
          Everything you need to run your restaurant efficiently
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Smart POS System</h3>
            <p>
              Lightning-fast point of sale with table management, split bills,
              and multiple payment options. Handle hundreds of orders daily with
              ease.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Inventory Management</h3>
            <p>
              Track ingredients in real-time, get low-stock alerts, and reduce
              waste. Automated ordering based on consumption patterns.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics & Reports</h3>
            <p>
              Powerful insights into sales, popular items, peak hours, and
              employee performance. Make data-driven decisions to grow your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="contact">
        <div className="cta-content">
          <h2>Ready to Transform Your Restaurant?</h2>
          <p>
            Join 500+ restaurants already using Anantrix to streamline
            operations and increase profits. Start your free 14-day trial today.
          </p>
          <button className="btn-cta">
            <span>Start Free Trial</span>
            <span className="btn-icon">🚀</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Anantrix Technology. Built with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default LandingPage;
