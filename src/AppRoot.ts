import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import './components/nav-bar';

@customElement('app-root')
export class AppRoot extends LitElement {
  @state() private loading = true;

  static styles = css`
    .loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  firstUpdated() {
    const router = new Router(this.shadowRoot?.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/projects', component: 'projects-page' },
      { path: '/about', component: 'about-page' },
      { path: '/resume', component: 'resume-page' },
      { path: '(.*)', redirect: '/' }
    ]);
    this.loading = false;
  }

  render() {
    return html`
      <div>
        ${this.loading ? html`
          <div class="loader">
            <div class="spinner"></div>
          </div>
        ` : ''}
        <nav-bar></nav-bar>
        <div id="outlet"></div>
      </div>
    `;
  }
}