import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('tech-stack')
export class TechStack extends LitElement {
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
      color: #6c63ff;
      width: 150px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
      border: 1px solid #ccc;
      border-radius: 8px; 
      background-color: #fff;
    }

    .tech-icon:hover {
      transform: scale(1.2);
    }
  `;

  render() {
    return html`
      <div class="stack-container">
        <div class="tech-icon">C++</div>
        <div class="tech-icon">JS</div>
        <div class="tech-icon">Go</div>
        <div class="tech-icon">Node</div>
        <div class="tech-icon">React</div>
        <div class="tech-icon">Solidity</div>
        <div class="tech-icon">Mongo</div>
        <div class="tech-icon">Next.js</div>
        <div class="tech-icon">Git</div>
        <div class="tech-icon">Firebase</div>
        <div class="tech-icon">Redis</div>
        <div class="tech-icon">Postgres</div>
        <div class="tech-icon">Python</div>
        <div class="tech-icon">Java</div>
      </div>
    `;
  }
}
