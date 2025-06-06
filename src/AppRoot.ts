import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

@customElement('app-root')
export class AppRoot extends LitElement {

  firstUpdated() {
    const router = new Router(this.shadowRoot?.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/projects', component: 'projects-page' },
      { path: '/about', component: 'about-page' },
      { path: '/resume', component: 'resume-page' },
      { path: '(.*)', redirect: '/' }
    ]);
  }

  render() {
    return html`
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/resume">Resume</a>
        </nav>
        <div id="outlet"></div>
      </div>
    `;
  }
}