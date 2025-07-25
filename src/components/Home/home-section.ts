import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../assets/home-main.svg';
import './type-writer';
import './home-section-two';

import '../particle-background.ts';

@customElement('home-page')
export class Home extends LitElement {
  static styles = css`
    .home-section {
      position: relative;
      padding: 3rem 1rem;
      background-color:rgb(90, 41, 154);
      background-image: url('/src/assets/home-bg.jpg');
      background-blend-mode: multiply;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .home-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .home-header {
      padding-bottom: 1rem;
    }

    .heading {
      font-size: 2rem;
      font-weight: bold;
      padding-left: 30px;
      color: white;
    }

    .heading-name {
      font-size: 2.5em !important;
      padding-left: 30px !important;
      color: white;
    }

    .purple {
      color: var(--imp-text-color) !important;
    }

    .img-fluid {
      max-width: 100%;
      height: auto;
      max-height: 450px;
    }

    .wave {
      display: inline-block;
      animation: wave 2s infinite;
      transform-origin: 70% 70%;
    }

    @keyframes wave {
      0% { transform: rotate(0.0deg) }
      10% { transform: rotate(14.0deg) }
      20% { transform: rotate(-8.0deg) }
      30% { transform: rotate(14.0deg) }
      40% { transform: rotate(-4.0deg) }
      50% { transform: rotate(10.0deg) }
      60% { transform: rotate(0.0deg) }
      100% { transform: rotate(0.0deg) }
    }

    @media (min-width: 768px) {
      .row {
        display: flex;
        align-items: center;
      }

      .col-md-7 {
        flex: 0 0 58.333%;
        padding-right: 1rem;
      }

      .col-md-5 {
        flex: 0 0 41.667%;
        text-align: center;
      }
    }

    home-section-two {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
  `;

  render() {
    return html`
      <section>
        <div class="home-section" id="home">
        <particle-background></particle-background>
          <div class="home-content">
            <div class="row">
              <div class="col-md-7 home-header">
                <h1 class="heading">
                  Hi There!
                  <span class="wave" role="img" aria-label="wave">👋🏻</span>
                </h1>

                <h1 class="heading-name">
                  I'M <strong class="purple">SOUMYAJIT BEHERA</strong>
                </h1>

                <type-writer></type-writer>
              </div>

              <div class="col-md-5" style="padding-bottom: 20px">
                <img
                  src="/src/assets/home-main.svg"
                  alt="home pic"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <home-section-two></home-section-two>
      </section>
    `;
  }
}
