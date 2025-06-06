import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-page')
export class AboutPage extends LitElement {
  render() {
    return html`
      <div>
        <h1>About Page</h1>
        <p>This is the about page.</p>
      </div>
    `;
  }
} 