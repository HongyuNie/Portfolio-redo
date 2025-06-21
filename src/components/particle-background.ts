// particle-background.ts
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tsParticles } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';


@customElement('particle-background')
export class ParticleBackground extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }

    #tsparticles {
      width: 100%;
      height: 100%;
    }
  `;

  firstUpdated() {
    this.initParticles();
  }

  async initParticles() {
    await loadFull(tsParticles);
    await tsParticles.load({
      id: 'tsparticles',
      options: {
        particles: {
          number: {
            value: 160,
            density: {
              enable: true
            },
          },
          links: {
            enable: false,
          },
          move: {
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            value: 0.5,
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        detectRetina: true,
      }
    });
  }

  render() {
    return html`<div id="tsparticles"></div>`;
  }
}
