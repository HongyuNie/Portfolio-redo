import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('pre-loader')
export class PreLoader extends LitElement {

  @property({ type: Boolean }) load = false;

  static styles = css`
    #preloader {
      width: 100%;
      height: 100vh;
      background: white;
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
    }

    #preloader-none {
      display: none;
    }
  `;

  render() {
    return html`
      <div id=${this.load ? 'preloader' : 'preloader-none'}></div>
    `;
  }
}
