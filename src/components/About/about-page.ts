import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './tech-stack'; 
import './tool-stack'; 
import './github-calendar'; 

@customElement('about-page')
export class AboutPage extends LitElement {
  static styles = css`
    .about-section {
      padding: 40px 20px;
      background-color: #f9f9f9;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      align-items: flex-start;
    }

    .col-left {
      flex: 1 1 60%;
      padding: 30px 0;
    }

    .col-right {
      flex: 1 1 35%;
      display: flex;
      justify-content: center;
      padding-top: 120px;
    }

    .img-fluid {
      max-width: 100%;
      height: auto;
    }

    .heading {
      font-size: 2rem;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .highlight {
      color: purple;
    }

    .section-title {
      margin-top: 60px;
      font-size: 1.5rem;
      text-align: center;
    }

    /* Optional: basic card style */
    .about-card {
      background: white;
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 12px;
    }
  `;

  render() {
    return html`
      <section class="about-section">
        <div class="container">
          <!-- Top Row: Text + Image -->
          <div class="row">
            <div class="col-left">
              <h1 class="heading">
                Know Who <span class="highlight">I'M</span>
              </h1>
              <div class="about-card">
                <p>
                  Hello! I'm a software engineer passionate about web development, 3D rendering, and interactive applications. I specialize in JavaScript frameworks, WebGL, and crafting engaging user experiences.
                </p>
              </div>
            </div>
            <div class="col-right">
              <img src="src/assets/about.png" alt="about image" class="img-fluid" />
            </div>
          </div>

          <!-- Techstack -->
          <h2 class="section-title">
            Professional <span class="highlight">Skillset</span>
          </h2>
          <tech-stack></tech-stack>
          

          <!-- Toolstack -->
          <h2 class="section-title">
            <span class="highlight">Tools</span> I Use
          </h2>
          <tool-stack></tool-stack>

          <!-- GitHub Section -->
          <div style="margin-top: 60px">
            <github-calendar></github-calendar>
          </div>
        </div>
      </section>
    `;
  }
}
