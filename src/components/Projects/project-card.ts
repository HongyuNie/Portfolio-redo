import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('project-card')
export class ProjectCard extends LitElement {
  static styles = css`
    .card {
      background: #1e1e1e;
      border-radius: 1rem;
      padding: 1rem;
      width: 300px;
      color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    img {
      max-width: 100%;
      border-radius: 0.5rem;
    }
    .links {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
    }
    a {
      color: #c770f0;
      text-decoration: none;
    }
  `;

  @property() imgPath = '';
  @property() isBlog = false;
  @property() title = '';
  @property() description = '';
  @property() ghLink = '';
  @property() demoLink = '';

  render() {
    return html`
      <div class="card">
        <img src=${this.imgPath} alt=${this.title} />
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <div class="links">
          <a href=${this.ghLink} target="_blank">GitHub</a>
          ${this.demoLink
            ? html`<a href=${this.demoLink} target="_blank">Demo</a>`
            : ''}
        </div>
      </div>
    `;
  }
}
