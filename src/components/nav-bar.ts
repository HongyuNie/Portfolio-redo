import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import logo from '../assets/logo.png';

@customElement('nav-bar')
export class NavBar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .navbar {
      background-color: transparent;
      transition: all 0.3s ease;
    }

    .sticky {
      background-color: #121212;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .logo {
      height: 40px;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .fork-btn {
      margin-left: 1rem;
    }

    .fork-btn-inner {
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .nav-links.expanded {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #121212;
        padding: 1rem;
      }
    }
  `;

  @state()
  private expand = false;

  @state()
  private navColour = false;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this.handleScroll);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll = () => {
    if (window.scrollY >= 20) {
      this.navColour = true;
    } else {
      this.navColour = false;
    }
  };

  private toggleExpand = () => {
    this.expand = !this.expand;
  };

  render() {
    return html`
      <nav class=${this.navColour ? 'sticky' : 'navbar'}>
        <a href="/" class="brand">
          <img src=${logo} class="logo" alt="brand" />
        </a>
        <button @click=${this.toggleExpand} class="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links ${this.expand ? 'expanded' : ''}">
          <li>
            <a href="/" class="nav-link" @click=${() => this.expand = false}>
              <span>🏠</span> Home
            </a>
          </li>
          <li>
            <a href="/about" class="nav-link" @click=${() => this.expand = false}>
              <span>👤</span> About
            </a>
          </li>
          <li>
            <a href="/projects" class="nav-link" @click=${() => this.expand = false}>
              <span>💻</span> Projects
            </a>
          </li>
          <li>
            <a href="/resume" class="nav-link" @click=${() => this.expand = false}>
              <span>📄</span> Resume
            </a>
          </li>
          <li>
            <a href="https://soumyajitblogs.vercel.app/" target="_blank" rel="noreferrer" class="nav-link">
              <span>📝</span> Blogs
            </a>
          </li>
          <li class="fork-btn">
            <a href="https://github.com/soumyajit4419/Portfolio" target="_blank" class="fork-btn-inner">
              <span>🔱</span>
              <span>⭐</span>
            </a>
          </li>
        </ul>
      </nav>
    `;
  }
}