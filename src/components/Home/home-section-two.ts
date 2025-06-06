import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-section-two')
export class HomeSectionTwo extends LitElement {
  static styles = css`
    .container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      justify-content: space-between;
      align-items: center;
    }
    .row:last-child {
      justify-content: center;
      margin-top: 3rem;
    }
    .col {
      flex: 1;
      min-width: 300px;
      padding: 1rem;
      max-width: 600px;
    }
    .myAvtar {
      display: flex;
      justify-content: flex-end;
    }
    .home-about-description h1 {
      font-size: 2.6em;
    }
    .home-about-body {
      font-size: 1.1rem;
      line-height: 1.6;
    }
    .purple {
      color: #6c63ff;
    }
    .img-fluid {
      max-width: 100%;
      height: auto;
    }
    .home-about-social-links {
      display: flex;
      list-style: none;
      gap: 1rem;
      padding: 0;
      justify-content: center;
    }
    .social-icons a {
      font-size: 1.8rem;
      color: #6c63ff;
      transition: transform 0.2s;
    }
    .social-icons a:hover {
      transform: scale(1.2);
    }
    .home-about-social {
      text-align: center;
      width: 100%;
    }
    .home-about-social h1 {
      margin-bottom: 1rem;
    }
  `;

  render() {
    return html`
      <section class="container home-about-section" id="about">
        <div class="container">
          <div class="row">
            <div class="col home-about-description">
              <h1>LET ME <span class="purple"> INTRODUCE </span> MYSELF</h1>
              <p class="home-about-body">
                I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️<br /><br />
                I am fluent in classics like <b class="purple"> C++, Javascript and Go. </b><br /><br />
                My field of Interest's are building new <b class="purple">Web Technologies and Products</b> and also in areas related to <b class="purple">Blockchain.</b><br /><br />
                Whenever possible, I also apply my passion for developing products with <b class="purple">Node.js</b> and <b class="purple">Modern Javascript Library and Frameworks</b> like <b class="purple">React.js and Next.js</b>.
              </p>
            </div>
            <div class="col myAvtar">
              <img src="src/assets/avatar.svg" class="img-fluid" alt="avatar" />
            </div>
          </div>

          <div class="row">
            <div class="col home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span class="purple">connect </span>with me
              </p>
              <ul class="home-about-social-links">
                <li class="social-icons">
                  <a href="https://github.com/soumyajit4419" target="_blank" rel="noreferrer">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li class="social-icons">
                  <a href="https://twitter.com/Soumyajit4419" target="_blank" rel="noreferrer">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="social-icons">
                  <a href="https://www.linkedin.com/in/soumyajit4419/" target="_blank" rel="noreferrer">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li class="social-icons">
                  <a href="https://www.instagram.com/soumyajit4419" target="_blank" rel="noreferrer">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

// Ensure Font Awesome is loaded in index.html or via script if using these icons.