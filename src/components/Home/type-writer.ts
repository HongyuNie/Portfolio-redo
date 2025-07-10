import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import Typewriter from 'typewriter-effect/dist/core';


@customElement('type-writer')
export class TypeWriter extends LitElement {
  @query('#typewriter') typewriterContainer!: HTMLSpanElement;

  firstUpdated() {
    new Typewriter(this.typewriterContainer, {
      strings: [
        "Software Developer",
        "Freelancer",
        "MERN Stack Developer",
        "Open Source Contributor"   
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50
    });
  }

  static styles = css`
  #typewriter {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--imp-text-color) ;
  }
`;

  render() {
    return html`
      <span id="typewriter"></span>
    `;
  }


}
