import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('about-card')
export class AboutCard extends LitElement {
    render () {
        return html`
            <h1>about-card</h1>
        `;
    }
}