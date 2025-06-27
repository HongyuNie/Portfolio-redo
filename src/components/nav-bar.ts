import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/top-nav/sp-top-nav.js';
import '@spectrum-web-components/top-nav/sp-top-nav-item.js';
import '@spectrum-web-components/menu/sp-menu-item.js';



@customElement('nav-bar')
export class NavBar extends LitElement {
  static styles = css `
    :host {
      display: block;
      z-index: 1000;
      position: relative;
  `;

  render() {
    return html`
      <sp-theme system="spectrum" color="light" scale="medium" style="background-color: var(--spectrum-grey-600)">
        <sp-top-nav>
          <sp-top-nav-item href="/">H N</sp-top-nav-item>
          <sp-top-nav-item href="/" style="margin-inline-start: auto;">
               Home
          </sp-top-nav-item>
          <sp-top-nav-item href="/about">About</sp-top-nav-item>
          <sp-top-nav-item href="/projects">Projects</sp-top-nav-item>
          <sp-top-nav-item href="/resume">Resume</sp-top-nav-item>
          <sp-top-nav-item href="https://soumyajitblogs.vercel.app/" target="_blank">Blogs</sp-top-nav-item>
          <sp-button href="https://github.com/soumyajit4419/Portfolio">Github</sp-button>
        </sp-top-nav>
        </sp-theme>
    `;
  }
}