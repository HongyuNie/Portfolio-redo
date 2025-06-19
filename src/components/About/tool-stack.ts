import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('tool-stack')
export class ToolStack extends LitElement {
  static styles = css`
    .stack-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      padding-bottom: 50px;
    }

    .tech-icon {
      font-size: 1.5rem;
      width: 150px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
      border-radius: 8px;
      transition: transform 0.3s ease;
      background-color: white;
      color: #6c63ff;
    }

    .tech-icon:hover {
      transform: scale(1.15);
      border-color: #6c63ff;
    }
  `;

  render() {
    return html`
      <div class="stack-container">
        <div class="tech-icon">macOS</div>
        <div class="tech-icon">VSCO</div>
        <div class="tech-icon">Postman</div>
        <div class="tech-icon">Slack</div>
        <div class="tech-icon">Vercel</div>
      </div>
    `;
  }
}
