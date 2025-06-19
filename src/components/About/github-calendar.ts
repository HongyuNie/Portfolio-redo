import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import GitHubCalendar from 'react-github-calendar';

@customElement('github-calendar')
export class GithubCalendar extends LitElement {
  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 10px;
    }
    .heading {
      font-size: 2rem;
      font-weight: bold;
      padding-bottom: 20px;
    }
    .purple {
      color: #c084f5;
    }
  `;

  firstUpdated() {
    const mountPoint = this.renderRoot.querySelector('#react-root');
    if (mountPoint) {
      const root = ReactDOM.createRoot(mountPoint);
      root.render(
        React.createElement(GitHubCalendar, {
          username: 'soumyajit4419',
          blockSize: 15,
          blockMargin: 5,
          theme: {
            light: ['#ebedf0', '#c084f5', '#c084f5', '#c084f5', '#c084f5'],
            dark: ['#ebedf0', '#c084f5', '#c084f5', '#c084f5', '#c084f5']
          },
          fontSize: 16
        })
      );
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="heading">
          Days I <span class="purple">Code</span>
        </div>
        <div id="react-root"></div>
      </div>
    `;
  }
}
