import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './project-card.ts';
import '../particle-background.ts';


@customElement('projects-page')
export class ProjectsSection extends LitElement {
  static styles = css`
    .project-section {
      background-color: #0d0d0d;
      padding: 4rem 2rem;
      color: white;
    }

    .project-heading {
      font-size: 2.5rem;
      text-align: center;
      color: white;
      margin-bottom: 1rem;
    }

    .purple {
      color: #c770f0;
    }

    .projects-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
    }
  `;

  @state()
  private projects = [
    {
      imgPath: 'src/assets/Projects/chatify.png',
      isBlog: false,
      title: 'Chatify',
      description: 'Personal Chat Room or Workspace...',
      ghLink: 'https://github.com/soumyajit4419/Chatify',
      demoLink: 'https://chatify-49.web.app/'
    },
    {
      imgPath: 'src/assets/Projects/blog.png',
      isBlog: false,
      title: 'Bits-0f-C0de',
      description: 'My personal blog page built with Next.js...',
      ghLink: 'https://github.com/soumyajit4419/Bits-0f-C0de',
      demoLink: 'https://blogs.soumya-jit.tech/'
    },
    {
      imgPath: 'src/assets/Projects/codeEditor.png',
      isBlog: false,
      title: 'Editor.io',
      description: 'Online code and markdown editor...',
      ghLink: 'https://github.com/soumyajit4419/Editor.io',
      demoLink: 'https://editor.soumya-jit.tech/'
    },
    {
      imgPath: 'src/assets/Projects/leaf.png',
      isBlog: false,
      title: 'Plant AI',
      description: 'Plant disease classifier using PyTorch...',
      ghLink: 'https://github.com/soumyajit4419/Plant_AI',
      demoLink: 'https://plant49-ai.herokuapp.com/'
    },
    {
      imgPath: 'src/assets/Projects/suicide.png',
      isBlog: false,
      title: 'AI For Social Good',
      description: 'NLP for suicide prevention...',
      ghLink: 'https://github.com/soumyajit4419/AI_For_Social_Good'
    },
    {
      imgPath: 'src/assets/Projects/emotion.png',
      isBlog: false,
      title: 'Face Recognition and Emotion Detection',
      description: 'Emotion prediction using CNN on FER-2013...',
      ghLink: 'https://github.com/soumyajit4419/Face_And_Emotion_Detection'
    }
  ];

  render() {
    return html`
      <div class="project-section">
        <particle-backgroud></particle-background>
        <h1 class="project-heading">
          My Recent <span class="purple">Works</span>
        </h1>
        <p style="text-align:center;">Here are a few projects I've worked on recently.</p>
        <div class="projects-grid">
          ${this.projects.map(
            (p) => html`
              <project-card
                .imgPath=${p.imgPath}
                .isBlog=${p.isBlog}
                .title=${p.title}
                .description=${p.description}
                .ghLink=${p.ghLink}
                .demoLink=${p.demoLink || ''}
              ></project-card>
            `
          )}
        </div>
      </div>
    `;
  }
}
